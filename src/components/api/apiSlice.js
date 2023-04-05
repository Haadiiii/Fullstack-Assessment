import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'Job',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://job-seeking.onrender.com' }),
  tagTypes: ['Job'],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => '/api/job',
      ProvidesTags: ['Job'],
    }),
    getJob: builder.query({
      query: (id) => `/api/job${id}`,
    }),
    getJobRecent: builder.query({
      query: () => '/api/job/recent',
    }),
    getHired: builder.query({
      query: () => '/api/hire',
    }),
    createJob: builder.mutation({
      query: (body) => ({
        url: '/api/job',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobQuery,
  useCreateJobMutation,
  useGetJobRecentQuery,
  useGetHiredQuery,
} = apiSlice;
