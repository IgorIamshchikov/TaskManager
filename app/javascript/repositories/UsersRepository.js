import routes from 'routes';
import FetchHelper from 'utils/fetchHelper';

export default {
  index(params) {
    const path = routes.adminUsersPath();
    return FetchHelper.get(path, params);
  },

  show(id) {
    const path = routes.adminUserPath(id);
    return FetchHelper.get(path);
  },

  update(id, task = {}) {
    const path = routes.adminUserPath(id);
    return FetchHelper.put(path, { task });
  },

  create(task = {}) {
    const path = routes.adminUsersPath();

    return FetchHelper.post(path, { task });
  },

  destroy(id) {
    const path = routes.adminUserPath(id);
    return FetchHelper.delete(path);
  },
};
