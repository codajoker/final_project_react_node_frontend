import { Header, ForgotPasswordForm } from '../../components/index';
import { Container } from '../../styles/Container.styled';
import {
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
} from '../PreviewPage/PrewiewPage.styled';
import {
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
} from '../LoginPage/LoginPage.styled';

export default function ForgotPasswordFormPage() {
  return (
    <>
      <Header />
      <BgBoxTablet>
        <BgBananaTablet />
        <BgStrawberryTablet />
        <BgLeavesTablet />
        <BgFigureTablet />
      </BgBoxTablet>

      <BgBoxDesctop>
        <BgBanana />
        <BgStrawberry />
        <BgLeaves />
        <BgFigure />
      </BgBoxDesctop>

      <Container>
        <ForgotPasswordForm />
      </Container>
    </>
  );
}
