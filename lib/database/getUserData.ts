import pool from "db";

export async function getUserData(username: string) {
    const userData = await pool.query(`
    SELECT
        u.*,
        COALESCE(follower_count, 0) AS follower_count,
        COALESCE(following_count, 0) AS following_count
        FROM
        users u
    LEFT JOIN (
        SELECT
            following,
            COUNT(*) AS follower_count
        FROM
            follow
        GROUP BY
            following
    ) AS followers
    ON u.id = followers.following
    LEFT JOIN (
        SELECT
            follower,
            COUNT(*) AS following_count
        FROM
            follow
        GROUP BY
            follower
    ) AS followings
    ON u.id = followings.follower
    WHERE
        u.username = $1;

  `, [username])

  return userData.rows[0]
}