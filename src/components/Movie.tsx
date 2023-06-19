import { Container } from "../styles/components/Container.styled";
import { Image } from "../styles/components/Image.styled";
import { Name } from "../styles/components/Name.styled";
import { Rating } from "../styles/components/Rating.styled";
import { TotalRating } from "../styles/components/TotalRating.styled";

type MovieProps = {
  id: number;
  rating: number;
  image: string;
  name: string;
};

export function Movie({ id, image, rating, name }: MovieProps): JSX.Element {
  return(
   
    <Container key={id}>
      <Image src={image} />
      <Rating>{rating}<TotalRating>/100</TotalRating></Rating>
      <Name>{name}</Name>
    
    </Container>
  );
}
