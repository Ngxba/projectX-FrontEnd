import UPDATE_BREADCRUMBS_DATA from '../types/breadcrumbsType';

const initialState = { linkRoutes: [] };

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case UPDATE_BREADCRUMBS_DATA:
      return {
        linkRoutes: action.payload.linkRoutes,
      };
    default:
      return state;
  }
};

export default reducer;
