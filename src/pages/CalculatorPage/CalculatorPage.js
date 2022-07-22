import {Header, MobileSidebar, RightSidebar, DailyCaloriesForm} from "../../components/index"
import { Main, SidebarWrapper } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <MobileSidebar />
      <Main>
        <DailyCaloriesForm />
        <SidebarWrapper>
          <RightSidebar />
        </SidebarWrapper>
      </Main>
    </>
  );
};

export default CalculatorPage;
