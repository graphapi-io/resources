export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface IApiKey extends INode {
  __typename?: 'ApiKey';
  createdAt: Scalars['String'];
  deletes?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IApiKeyComparisonInput {
  and?: InputMaybe<Array<InputMaybe<IApiKeyComparisonInput>>>;
  createdAt?: InputMaybe<IStringComparisonInput>;
  deletes?: InputMaybe<IIntComparisonInput>;
  description?: InputMaybe<IStringComparisonInput>;
  expires?: InputMaybe<IIntComparisonInput>;
  key?: InputMaybe<IStringComparisonInput>;
  not?: InputMaybe<IApiKeyComparisonInput>;
  or?: InputMaybe<Array<InputMaybe<IApiKeyComparisonInput>>>;
  updatedAt?: InputMaybe<IStringComparisonInput>;
}

export interface IApiKeyDeleteInput {
  id: Scalars['ID'];
  key: Scalars['String'];
}

export interface IApiKeyInput {
  deletes?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  expires?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
}

export interface IApiKeyUpdateInput {
  deletes?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  expires?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  key: Scalars['String'];
}

export interface IApiKeysConnection {
  __typename?: 'ApiKeysConnection';
  items?: Maybe<Array<Maybe<IApiKey>>>;
  nextToken?: Maybe<Scalars['String']>;
}

export interface IBlog extends INode {
  __typename?: 'Blog';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  postConnection?: Maybe<IBlogPostsConnection>;
  updatedAt?: Maybe<Scalars['String']>;
}


export interface IBlogPostConnectionArgs {
  filter?: InputMaybe<IPostComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}

export interface IBlogComparisonInput {
  and?: InputMaybe<Array<InputMaybe<IBlogComparisonInput>>>;
  createdAt?: InputMaybe<IStringComparisonInput>;
  name?: InputMaybe<IStringComparisonInput>;
  not?: InputMaybe<IBlogComparisonInput>;
  or?: InputMaybe<Array<InputMaybe<IBlogComparisonInput>>>;
  updatedAt?: InputMaybe<IStringComparisonInput>;
}

export interface IBlogDeleteInput {
  id: Scalars['ID'];
}

export interface IBlogInput {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface IBlogPostsConnection {
  __typename?: 'BlogPostsConnection';
  items?: Maybe<Array<Maybe<IPost>>>;
  nextToken?: Maybe<Scalars['String']>;
}

export interface IBlogUpdateInput {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
}

export interface IBlogsConnection {
  __typename?: 'BlogsConnection';
  items?: Maybe<Array<Maybe<IBlog>>>;
  nextToken?: Maybe<Scalars['String']>;
}

export interface IBooleanComparisonInput {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ComparisonAttributeType>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
}

export interface IComment extends INode {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  postId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
}

export interface ICommentComparisonInput {
  and?: InputMaybe<Array<InputMaybe<ICommentComparisonInput>>>;
  content?: InputMaybe<IStringComparisonInput>;
  createdAt?: InputMaybe<IStringComparisonInput>;
  not?: InputMaybe<ICommentComparisonInput>;
  or?: InputMaybe<Array<InputMaybe<ICommentComparisonInput>>>;
  postId?: InputMaybe<IIdComparisonInput>;
  updatedAt?: InputMaybe<IStringComparisonInput>;
  userName?: InputMaybe<IStringComparisonInput>;
}

export interface ICommentDeleteInput {
  id: Scalars['ID'];
}

export interface ICommentInput {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  postId: Scalars['ID'];
  userName?: InputMaybe<Scalars['String']>;
}

export interface ICommentUpdateInput {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  postId?: InputMaybe<Scalars['ID']>;
  userName?: InputMaybe<Scalars['String']>;
}

export interface ICommentsConnection {
  __typename?: 'CommentsConnection';
  items?: Maybe<Array<Maybe<IComment>>>;
  nextToken?: Maybe<Scalars['String']>;
}

export enum ComparisonAttributeType {
  NULL = '_null',
  BINARY = 'binary',
  BINARY_SET = 'binarySet',
  BOOL = 'bool',
  LIST = 'list',
  MAP = 'map',
  NUMBER = 'number',
  NUMBER_SET = 'numberSet',
  STRING = 'string',
  STRING_SET = 'stringSet'
}

export interface IFloatComparisonInput {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ComparisonAttributeType>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
}

export interface IIdComparisonInput {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ComparisonAttributeType>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ISizeComparisonInput>;
}

export interface IIntComparisonInput {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ComparisonAttributeType>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
}

export interface IMutation {
  __typename?: 'Mutation';
  batchCreateApiKey?: Maybe<Array<Maybe<IApiKey>>>;
  batchCreateBlog?: Maybe<Array<Maybe<IBlog>>>;
  batchCreateComment?: Maybe<Array<Maybe<IComment>>>;
  batchCreatePost?: Maybe<Array<Maybe<IPost>>>;
  batchDeleteApiKey?: Maybe<Array<Maybe<IApiKey>>>;
  batchDeleteBlog?: Maybe<Array<Maybe<IBlog>>>;
  batchDeleteComment?: Maybe<Array<Maybe<IComment>>>;
  batchDeletePost?: Maybe<Array<Maybe<IPost>>>;
  createApiKey?: Maybe<IApiKey>;
  createBlog?: Maybe<IBlog>;
  createComment?: Maybe<IComment>;
  createPost?: Maybe<IPost>;
  deleteApiKey?: Maybe<IApiKey>;
  deleteBlog?: Maybe<IBlog>;
  deleteComment?: Maybe<IComment>;
  deletePost?: Maybe<IPost>;
  updateApiKey?: Maybe<IApiKey>;
  updateBlog?: Maybe<IBlog>;
  updateComment?: Maybe<IComment>;
  updatePost?: Maybe<IPost>;
}


export interface IMutationBatchCreateApiKeyArgs {
  input?: InputMaybe<Array<IApiKeyInput>>;
}


export interface IMutationBatchCreateBlogArgs {
  input?: InputMaybe<Array<IBlogInput>>;
}


export interface IMutationBatchCreateCommentArgs {
  input?: InputMaybe<Array<ICommentInput>>;
}


export interface IMutationBatchCreatePostArgs {
  input?: InputMaybe<Array<IPostInput>>;
}


export interface IMutationBatchDeleteApiKeyArgs {
  input?: InputMaybe<Array<IApiKeyDeleteInput>>;
}


export interface IMutationBatchDeleteBlogArgs {
  input?: InputMaybe<Array<IBlogDeleteInput>>;
}


export interface IMutationBatchDeleteCommentArgs {
  input?: InputMaybe<Array<ICommentDeleteInput>>;
}


export interface IMutationBatchDeletePostArgs {
  input?: InputMaybe<Array<IPostDeleteInput>>;
}


export interface IMutationCreateApiKeyArgs {
  condition?: InputMaybe<IApiKeyComparisonInput>;
  input: IApiKeyInput;
}


export interface IMutationCreateBlogArgs {
  condition?: InputMaybe<IBlogComparisonInput>;
  input: IBlogInput;
}


export interface IMutationCreateCommentArgs {
  condition?: InputMaybe<ICommentComparisonInput>;
  input: ICommentInput;
}


export interface IMutationCreatePostArgs {
  condition?: InputMaybe<IPostComparisonInput>;
  input: IPostInput;
}


export interface IMutationDeleteApiKeyArgs {
  condition?: InputMaybe<IApiKeyComparisonInput>;
  input: IApiKeyDeleteInput;
}


export interface IMutationDeleteBlogArgs {
  condition?: InputMaybe<IBlogComparisonInput>;
  input: IBlogDeleteInput;
}


export interface IMutationDeleteCommentArgs {
  condition?: InputMaybe<ICommentComparisonInput>;
  input: ICommentDeleteInput;
}


export interface IMutationDeletePostArgs {
  condition?: InputMaybe<IPostComparisonInput>;
  input: IPostDeleteInput;
}


export interface IMutationUpdateApiKeyArgs {
  condition?: InputMaybe<IApiKeyComparisonInput>;
  input: IApiKeyUpdateInput;
}


export interface IMutationUpdateBlogArgs {
  condition?: InputMaybe<IBlogComparisonInput>;
  input: IBlogUpdateInput;
}


export interface IMutationUpdateCommentArgs {
  condition?: InputMaybe<ICommentComparisonInput>;
  input: ICommentUpdateInput;
}


export interface IMutationUpdatePostArgs {
  condition?: InputMaybe<IPostComparisonInput>;
  input: IPostUpdateInput;
}

export interface INode {
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IPost extends INode {
  __typename?: 'Post';
  Content?: Maybe<Array<Maybe<Scalars['String']>>>;
  blogId?: Maybe<Scalars['ID']>;
  commentConnection?: Maybe<IPostCommentsConnection>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  state?: Maybe<PublishState>;
  updatedAt?: Maybe<Scalars['String']>;
}


export interface IPostCommentConnectionArgs {
  filter?: InputMaybe<ICommentComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}

export interface IPostCommentsConnection {
  __typename?: 'PostCommentsConnection';
  items?: Maybe<Array<Maybe<IComment>>>;
  nextToken?: Maybe<Scalars['String']>;
}

export interface IPostComparisonInput {
  Content?: InputMaybe<IStringComparisonInput>;
  and?: InputMaybe<Array<InputMaybe<IPostComparisonInput>>>;
  blogId?: InputMaybe<IIdComparisonInput>;
  createdAt?: InputMaybe<IStringComparisonInput>;
  not?: InputMaybe<IPostComparisonInput>;
  or?: InputMaybe<Array<InputMaybe<IPostComparisonInput>>>;
  state?: InputMaybe<IPublishStateComparisonInput>;
  updatedAt?: InputMaybe<IStringComparisonInput>;
}

export interface IPostDeleteInput {
  id: Scalars['ID'];
}

export interface IPostInput {
  Content?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blogId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<PublishState>;
}

export interface IPostUpdateInput {
  Content?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blogId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  state?: InputMaybe<PublishState>;
}

export interface IPostsConnection {
  __typename?: 'PostsConnection';
  items?: Maybe<Array<Maybe<IPost>>>;
  nextToken?: Maybe<Scalars['String']>;
}

export enum PublishState {
  PUBLISHED = 'PUBLISHED',
  SAVED = 'SAVED'
}

export interface IPublishStateComparisonInput {
  eq?: InputMaybe<PublishState>;
  ne?: InputMaybe<PublishState>;
}

export interface IQuery {
  __typename?: 'Query';
  apiKey?: Maybe<IApiKey>;
  batchGetApiKey?: Maybe<Array<Maybe<IApiKey>>>;
  batchGetBlog?: Maybe<Array<Maybe<IBlog>>>;
  batchGetComment?: Maybe<Array<Maybe<IComment>>>;
  batchGetPost?: Maybe<Array<Maybe<IPost>>>;
  blog?: Maybe<IBlog>;
  comment?: Maybe<IComment>;
  listApiKeys?: Maybe<IApiKeysConnection>;
  listBlogs?: Maybe<IBlogsConnection>;
  listComments?: Maybe<ICommentsConnection>;
  listCommentsByPost?: Maybe<ICommentsConnection>;
  listPosts?: Maybe<IPostsConnection>;
  listPostsByBlog?: Maybe<IPostsConnection>;
  post?: Maybe<IPost>;
}


export interface IQueryApiKeyArgs {
  id: Scalars['ID'];
}


export interface IQueryBatchGetApiKeyArgs {
  ids?: InputMaybe<Array<Scalars['ID']>>;
}


export interface IQueryBatchGetBlogArgs {
  ids?: InputMaybe<Array<Scalars['ID']>>;
}


export interface IQueryBatchGetCommentArgs {
  ids?: InputMaybe<Array<Scalars['ID']>>;
}


export interface IQueryBatchGetPostArgs {
  ids?: InputMaybe<Array<Scalars['ID']>>;
}


export interface IQueryBlogArgs {
  id: Scalars['ID'];
}


export interface IQueryCommentArgs {
  id: Scalars['ID'];
}


export interface IQueryListApiKeysArgs {
  filter?: InputMaybe<IApiKeyComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}


export interface IQueryListBlogsArgs {
  filter?: InputMaybe<IBlogComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}


export interface IQueryListCommentsArgs {
  filter?: InputMaybe<ICommentComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}


export interface IQueryListCommentsByPostArgs {
  filter?: InputMaybe<ICommentComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  postId: Scalars['ID'];
  sortOrder?: InputMaybe<SortOrderType>;
}


export interface IQueryListPostsArgs {
  filter?: InputMaybe<IPostComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}


export interface IQueryListPostsByBlogArgs {
  blogId: Scalars['ID'];
  filter?: InputMaybe<IPostComparisonInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortOrderType>;
}


export interface IQueryPostArgs {
  id: Scalars['ID'];
}

export interface ISizeComparisonInput {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
}

export enum SortOrderType {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface IStringComparisonInput {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ComparisonAttributeType>;
  beginsWith?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ISizeComparisonInput>;
}

export type IQueryBlogQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IQueryBlogQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', id: string, name?: string | null } | null };
