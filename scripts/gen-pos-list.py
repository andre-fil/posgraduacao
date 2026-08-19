import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


COMMON_BLOCKS_CH = {
    "commonEducacaoDocencia": 280,  # 40+40+40+30+40+30+30+30
    "commonMbaBase": 160,  # 30+40+30+30+30
    "commonTecnologiaBase": 160,
}


def parse_courses(text: str) -> list[dict]:
    courses = []
    blocks = re.split(r"\{\s*\n\s*slug:", text)
    for block in blocks[1:]:
        title_m = re.search(
            r'title:\s*"([^"]+)"|title:\s*\n\s*"([^"]+)"', block, re.S
        )
        desc_m = re.search(r'fullDescription:\s*\n\s*"([^"]+)"', block, re.S)
        if not title_m:
            continue
        title = title_m.group(1) or title_m.group(2)
        desc = desc_m.group(1) if desc_m else ""
        workloads = [int(x) for x in re.findall(r"workload:\s*(\d+)", block)]
        ch = sum(workloads)
        for name, hours in COMMON_BLOCKS_CH.items():
            if f"...{name}" in block:
                ch += hours
        if not workloads and not any(f"...{n}" in block for n in COMMON_BLOCKS_CH):
            ch = None
        courses.append({"title": title, "ch": ch or None, "desc": desc})
    return courses


def main() -> None:
    courses_ts = (ROOT / "src/data/courses.ts").read_text(encoding="utf-8")
    new_ts = (ROOT / "src/data/new-courses.ts").read_text(encoding="utf-8")
    orig = courses_ts.split("export const courses")[1].split("...newCourses")[0]
    all_courses = parse_courses(orig) + parse_courses(new_ts)

    lines = [
        "# Pós-graduações FEMAF Digital",
        "",
        "Lista de todos os cursos cadastrados no site, com carga horária (CH) calculada pela soma das disciplinas quando informada.",
        "",
        f"**Total:** {len(all_courses)} cursos",
        "",
        "---",
        "",
    ]

    for i, c in enumerate(all_courses, 1):
        ch = f"{c['ch']}h" if c["ch"] is not None else "a confirmar"
        lines.append(f"## {i}. {c['title']}")
        lines.append("")
        lines.append(f"- **CH:** {ch}")
        lines.append(f"- **Breve resumo:** {c['desc']}")
        lines.append("")

    out = ROOT / "public" / "lista-pos-graduacoes.md"
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out} ({len(all_courses)} courses)")


if __name__ == "__main__":
    main()
