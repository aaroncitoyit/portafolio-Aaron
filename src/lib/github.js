const GITHUB_USERNAME = "aaroncitoyit";
const GITHUB_API = "https://api.github.com";

async function fetchWithAuth(url) {
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };
  
  if (import.meta.env.VITE_GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`;
  }

  const response = await fetch(url, { headers });
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  return response.json();
}

export async function fetchGitHubUser() {
  return fetchWithAuth(`${GITHUB_API}/users/${GITHUB_USERNAME}`);
}

export async function fetchGitHubRepos() {
  const repos = await fetchWithAuth(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`
  );
  
  return repos
    .filter(repo => !repo.fork && !repo.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
}

export async function fetchGitHubStats() {
  const [user, repos] = await Promise.all([
    fetchGitHubUser(),
    fetchGitHubRepos(),
  ]);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

  return {
    user: {
      name: user.name || user.login,
      bio: user.bio,
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    },
    repos,
    stats: {
      totalStars,
      totalForks,
      totalRepos: repos.length,
    },
  };
}

export function getLanguageColor(language) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Java: "#b07219",
    PHP: "#4F5D95",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Go: "#00ADD8",
    Rust: "#dea584",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#239120",
    Vue: "#41b883",
    React: "#61dafb",
    Svelte: "#ff3e00",
    Dart: "#00B4AB",
    Kotlin: "#A97BFF",
    Swift: "#ffac45",
    Shell: "#89e051",
  };
  return colors[language] || "#8b949e";
}