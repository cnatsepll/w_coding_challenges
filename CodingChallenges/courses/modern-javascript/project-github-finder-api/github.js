class GitHub {
  constructor() {
    // tokens to get into github api
    this.client_id = '1c7bcae1b2fed5a28d27';
    this.client_secret = 'aa7001b96a6b2df1a52205dad8bea51a5d88d1c0';
    // setting the amount of repos that we want to display
    this.repos_count = 5;
    // specifying that we want the most recent repos first
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // out fetch url contains a '?' and '&'
    // the ? indicates that we are going to be passing in a query string
    // the & indicates that we are going to add on to our existing query
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    //  in ES6 we can use a single name to define an object property
    // if the key and the variable value name are the same.
    // in the case below there is just the single name profile
    // this is the equivelent of "profile : profile"
    // since they are the same we can just use the variable property name once
    return {
      profile,
      repos
    }
  }


}