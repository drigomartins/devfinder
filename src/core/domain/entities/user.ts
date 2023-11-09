export class User {
  public readonly id: number
  public readonly name: string
  public readonly login: string
  public readonly html_url: string
  public readonly location: string
  public readonly bio: string
  public readonly avatar_url: string
  public readonly created_at: string
  public readonly public_repos: number
  public readonly public_gists: number
  public readonly followers: number
  public readonly following: number


  constructor(data: User.Data) {
    this.id = data.id
    this.name = data.name
    this.login = data.login
    this.html_url = data.html_url
    this.location = data.location
    this.bio = data.bio
    this.avatar_url = data.avatar_url
    this.created_at = data.created_at
    this.public_repos = data.public_repos
    this.public_gists = data.public_gists
    this.followers = data.followers
    this.following = data.following
  }
}

export namespace User {
  export type Data = {
    id: number
    name: string
    login: string
    html_url: string
    location: string
    bio: string
    avatar_url: string
    created_at: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
  }
}
