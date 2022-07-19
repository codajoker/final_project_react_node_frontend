import VerificationForm from '../../components/VerificationForm/VerificationForm';
import { Container } from '../../styles/Container.styled';
import {
  BgBoxDesctop,
  BgBanana,
  BgStrawberry,
  BgLeaves,
  BgFigure,
  BgBoxTablet,
} from '../../pages/PreviewPage/PrewiewPage.styled';
import {
  BgBananaTablet,
  BgStrawberryTablet,
  BgLeavesTablet,
  BgFigureTablet,
} from '../../pages/LoginPage/LoginPage.styled';

export default function VerificationFormPage() {
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
      <VerificationForm />
    </Container>
  );
}
