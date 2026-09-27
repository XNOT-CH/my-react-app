import GameCard from "@/components/GameCard";

const games = [
    {
        id: "game1",
        name: "Minecraft",
        platform: "PC",
        hours: 50,
        status: "กำลังเล่น",
    },
    {
        id: "game2",
        name: "Hades",
        platform: "PlayStation 5",
        hours: 25,
        status: "ยังไม่เริ่ม",
    },
    {
        id: "game3",
        name: "Terraria",
        platform: "Mobile",
        hours: 30,
        status: "เล่นจบแล้ว",
    },
];

export default function GamesPage() {
    return (
        <main>
            <h1>Game Backlog</h1>

            {games.map((game) => (
                <GameCard
                    key={game.id}
                    name={game.name}
                    platform={game.platform}
                    hours={game.hours}
                    status={game.status}
                />
            ))}
        </main>
    );
}