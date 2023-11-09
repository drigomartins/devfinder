import { API } from '@/core/infra';

export const findUserByName = async (id: string): Promise<any> => {
  const apiToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  const responseBody = await API.get(`/search/users?q=${id}`, 
      { headers: { 
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${apiToken}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }  
  })
  return responseBody.data
}

export const findUser = async (id: string): Promise<any> => {
  const apiToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  const responseBody = await API.get(`users/${id}`, 
      { headers: { 
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${apiToken}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }  
  })
  return responseBody.data
}

export const findRepos = async (id: string): Promise<any> => {
  const apiToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  const responseBody = await API.get(`/users/${id}/repos`, 
      { headers: { 
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${apiToken}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }  
  })
  return responseBody.data
}

export const findRepo = async (id: string, repoId: string): Promise<any> => {
  const apiToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN
  const responseBody = await API.get(`/repos/${id}/${repoId}`, 
      { headers: { 
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${apiToken}`,
        "X-GitHub-Api-Version": "2022-11-28"
      }  
  })
  return responseBody.data
}