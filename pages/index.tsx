import GNB from "../src/components/organisms/GNB";
import Banner from "../src/components/organisms/Banner";
import YoutubeTitleRecommendation from "../src/components/organisms/YoutubeTitleRecommendation";
import YoutubeThumbnailRecommendation from "../src/components/organisms/YoutubeThumbnailRecommendation";
import GFooter from "../src/components/organisms/GFooter";

export default function Home(): JSX.Element {
  return (
    <>
      <GNB></GNB>
      <Banner></Banner>
      <YoutubeTitleRecommendation></YoutubeTitleRecommendation>
      <YoutubeThumbnailRecommendation></YoutubeThumbnailRecommendation>
      <GFooter></GFooter>
    </>
  );
}
