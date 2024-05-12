function generateUsername(): string {


    let adjective: string[] = [
        "Brilliant",
        "Vivacious",
        "Serene",
        "Dazzling",
        "Whimsical",
        "Radiant",
        "Sleek",
        "Majestic",
        "Charming",
        "Genuine",
        "Fierce",
        "Cozy",
        "Elegant",
        "Dynamic",
        "Vibrant",
        "Joyful",
        "Gentle",
        "Luminous",
        "Graceful",
        "Enchanting",
        "Bold",
        "Peaceful",
        "Exuberant",
        "Delightful",
        "Harmonious",
        "Cheerful",
        "Ethereal",
        "Captivating",
        "Energetic",
        "Quirky",
        "Tranquil",
        "Resilient",
        "Magnetic",
        "Adventurous",
        "Mysterious",
        "Sparkling",
        "Unique",
        "Playful",
        "Innovative",
        "Spirited",
        "Sophisticated",
        "Enigmatic",
        "Blissful",
        "Colorful",
        "Eclectic",
        "Lively",
        "Soothing",
        "Candid",
        "Mesmerizing"]

    let noun: string[] = [
        "Owl",
        "Hummingbird",
        "Turtle",
        "Peacock",
        "Fox",
        "Lion",
        "Dolphin",
        "Eagle",
        "Butterfly",
        "Panda",
        "Tiger",
        "Kitten",
        "Swan",
        "Cheetah",
        "Parrot",
        "Puppy",
        "Deer",
        "Firefly",
        "Horse",
        "Giraffe",
        "Wolf",
        "Dove",
        "Monkey",
        "Otter",
        "Canary",
        "Squirrel",
        "Octopus",
        "Fish",
        "Elephant",
        "Jaguar",
        "Zebra",
        "Kangaroo",
        "Gorilla",
        "Leopard",
        "Penguin",
        "Raccoon",
        "Sloth",
        "Ostrich",
        "PolarBear",
        "Walrus",
        "Koala",
        "Hedgehog",
        "Gibbon",
        "Emu",
        "Dingo",
        "Jellyfish",
        "Albatross",
        "Armadillo",
        "Vulture",
        "Marmot"]


    function getAdjective(): string {
        return getRandomFromArray(adjective)
    }

    function getNoun(): string {
        return getRandomFromArray(noun)
    }

    function getRandomFromArray(list: any[]): any {
        return (
            list[Math.floor(Math.random() * list.length)]
        )
    }

    let username: string = getAdjective() + getNoun()

    return (username)
}
export default generateUsername;