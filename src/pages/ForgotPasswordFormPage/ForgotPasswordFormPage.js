import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
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
    <Container>
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
      <ForgotPasswordForm />
    </Container>
  );
}
