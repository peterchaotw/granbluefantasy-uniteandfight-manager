interface GuildRank {
    msg: string;
    result: GuildMember[];
}

interface GuildMember {
    level: string;
    name: string;
    position: string;
    userid: string;
}

interface UserRank {
    msg: string;
    result: UserPoint[];
}

interface UserPoint {
    updatedate: Date;
    minp: number;
    maxp: number
}