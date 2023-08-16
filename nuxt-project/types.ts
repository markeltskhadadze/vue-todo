export type TPosts = {
  _id: string;
  title: string;
  description: string;
  author?: TAuthor;
  date?: Date;
  img?: string;
}

export type TService = {
  title: string;
  description: string;
}

type TAuthor = {
  name: string;
  password: string;
  posts: string[];
  role:string;
}

export type TReviews = {
  _id: string;
  fullName: string;
  reviewText: string;
}

export type TProfile = {
  _id: string;
  name: string;
  password?: string;
}

export type TProjectInfo = {
  project_name: string;
  project_link: string;
  chart_data: Object
}

export type TUserData = Pick<TAuthor, 'name' | 'password'>

export type TNewReview = Pick<TReviews, 'fullName' | 'reviewText'>
