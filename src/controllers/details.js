const EMAIL = "brightjohn489@gmail.com";
const GITHUB_URL = "https://github.com/braitcode";

export const getDetails = async (req, res) => {
    const current_datetime = new Date().toISOString(); // ISO 8601 UTC format
    res.status(200).json({
        slack_email: EMAIL,
        current_datetime,
        github_url: GITHUB_URL
    });
}