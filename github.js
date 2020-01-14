class GitHub {
    constructor(){
        this.client_ID = 'e6cc4dc0bad2642f4bf4';
        this.client_secret = '5d056a3094826163f1e8d880c33c78c560996e1b';
        this.user = 'D0lph1nnnnn';
        this.apiUrl = "https://api.github.come/users/"
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}$client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=?${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;
 
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);
 
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
 
        return{
            profile,
            repos
        }
    }
} 