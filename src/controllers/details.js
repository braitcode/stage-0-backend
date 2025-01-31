const EMAIL = "brightjohn489@gmail.com";
const GITHUB_URL = "https://github.com/braitcode/stage-0-backend.git";

export const getDetails = async (req, res) => {
    const current_datetime = new Date().toISOString(); // ISO 8601 UTC format
    res.status(200).json({
        email: EMAIL,
        current_datetime,
        github_url: GITHUB_URL
    });
}