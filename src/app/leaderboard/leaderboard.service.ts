import { Leaderboard } from "../shared/leaderboard.model";

export class leaderboardService {
    private leaderboards: Map<string, Leaderboard> = new Map<string, Leaderboard>([
        ['001', new Leaderboard(1,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',11111111122)],
        ['002', new Leaderboard(2,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',112)],
        ['003', new Leaderboard(3,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',102)],
        ['004', new Leaderboard(4,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',92)],
        ['005', new Leaderboard(5,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',82)],
        ['006', new Leaderboard(6,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',72)],
        ['007', new Leaderboard(7,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',62)],
        ['008', new Leaderboard(8,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',52)],
        ['009', new Leaderboard(9,'user','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',42)],
        ['010', new Leaderboard(10,'userlongnamelong','https://cdn.pixabay.com/photo/2015/02/19/03/31/man-641691_960_720.jpg',32)]
    ]);

    getLeaderboards(){
        return this.leaderboards;
    }
    getLeaderboard(index: string){
        return this.leaderboards.get(index);
    }
}