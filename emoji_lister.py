import json

EMOJI_CATEGORIES = [
    "face-smiling",
    "face-affection",
    "face-tongue",
    "face-hand",
    "face-neutral-skeptical",
    "face-sleepy",
    "face-unwell",
    "face-hat",
    "face-glasses",
    "face-concerned",
    "face-negative",
    "face-costume",
    "cat-face",
    "monkey-face",
    "emotion",
    "hand-fingers-open",
    "hand-fingers-partial",
    "hand-single-finger",
    "hand-fingers-closed",
    "hands",
    "hand-prop",
    "body-parts",
    "person-gesture",
    "person-role",
    "person-fantasy",
    "person-activity",
    "person-sport",
    "person-resting",
    "person-symbol",
    "animal-mammal",
    "animal-bird",
    "animal-amphibian",
    "animal-reptile",
    "animal-marine",
    "animal-bug",
    "plant-flower",
    "plant-other",
    "food-fruit",
    "food-vegetable",
    "food-prepared",
    "food-asian",
    "food-marine",
    "food-sweet",
    "drink",
    "dishware",
    "place-map",
    "place-geographic",
    "place-building",
    "place-other",
    "transport-ground",
    "transport-water",
    "transport-air",
    "hotel",
    "time",
    "sky & weather",
    "event",
    "award-medal",
    "sport",
    "game",
    "arts & crafts",
    "clothing",
    "sound",
    "music",
    "musical-instrument",
    "phone",
    "computer",
    "light & video",
    "book-paper",
    "money",
    "mail",
    "writing",
    "office",
    "lock",
    "tool",
    "science",
    "medical",
    "household",
    "other-object",
    "transport-sign",
    "warning",
    "arrow",
    "zodiac",
    "av-symbol",
    "math",
    "punctuation",
    "currency",
    "other-symbol",
    "keycap",
    "alphanum",
]

# Extract individual emoji based on categories
with open("all-emoji.json") as fh:
    all_emojis = json.load(fh)

with open("emoji.txt", "w") as fh:
    for category in EMOJI_CATEGORIES:
        # Scan to find category
        found = False
        for line in all_emojis:
            if line == [category]:
                found = True
                fh.write(f"# {category}\n")
            elif len(line) != 4 and found:
                break
            elif found:
                # Skip gendered emoji
                if line[3].startswith("man ") or line[3].startswith("woman "):
                    continue
                fh.write(f"{line[2]}\n")
        if not found:
            raise ValueError(f"Bad category {category}")
