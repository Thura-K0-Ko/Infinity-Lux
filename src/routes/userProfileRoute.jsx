import { lazy } from "react";
const UserProfilePage = lazy(() =>
  import("../features/user-profile/page/UserProfilePage")
);
const PasswordChangePage = lazy(() =>
  import("../features/user-profile/page/PasswordChangePage")
);
const ProfileImageChangePage = lazy(() =>
  import("../features/user-profile/page/ProfileImageChangePage")
);
const ProfileNameChangePage = lazy(() =>
  import("../features/user-profile/page/ProfileNameChangePage")
);



const userProfileRoute = [
  {
    path: "user-profile",
    element: <UserProfilePage />,
  },
  {
    path: "user-profile/password-change",
    element: <PasswordChangePage />,
  },
  {
    path: "user-profile/image-change",
    element: <ProfileImageChangePage />,
  },
  {
    path: "user-profile/name-change",
    element: <ProfileNameChangePage />,
  },
];
export default userProfileRoute;
