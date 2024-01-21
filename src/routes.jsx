import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import MeetingMinutesDetail from './pages/MeetingMinutesDetail';
import MeetingMinutesList from './pages/MeetingMinutesList';
import MeetingMinutesText from './pages/MeetingMinutesText';
import MeetingMinutesVoice from './pages/MeetingMinutesVoice';
import Onboarding from './pages/Onboarding';
import Profile from './pages/Profile';
import ProjectInfo from './pages/ProjectInfo';
import PutCategory from './pages/PutCategory';
import PutDuration from './pages/PutDuration';
import PutMembers from './pages/PutMembers';
import PutProjectName from './pages/PutProjectName';
import RoleInfo from './pages/RoleInfo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TodoList from './pages/todo-list/TodoList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route
          path="meetingminutesdetail/:meetingId"
          element={<MeetingMinutesDetail />}
        />
        <Route path="meetingminuteslist" element={<MeetingMinutesList />} />
        <Route path="meetingminutestext" element={<MeetingMinutesText />} />
        <Route path="meetingminutesvoice" element={<MeetingMinutesVoice />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projectinfo" element={<ProjectInfo />} />
        <Route path="putcategory" element={<PutCategory />} />
        <Route path="putduration" element={<PutDuration />} />
        <Route path="putmembers" element={<PutMembers />} />
        <Route path="putprojectname" element={<PutProjectName />} />
        <Route path="roleinfo" element={<RoleInfo />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="todolist" element={<TodoList />} />
      </Route>
    </>
  )
);

export default router;
