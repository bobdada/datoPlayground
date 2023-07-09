import { Box, Flex, Image } from "@chakra-ui/react";
import { useQuery } from "graphql-hooks";
import "../App.css";
import ContentText from "../components/ContentText";

const YSQuery = `
query MyQuery {
  yogaSandhyaPage {
    yogaSandhyaLandingPage {
      id
      icon {
        url
      }
      videoLink
      descriptions {
        text
      }
    }
  }
}
`;

function YogaSandhya() {
  const { loading, error, data } = useQuery(YSQuery);
  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";
  const ys = data?.["yogaSandhyaPage"]?.["yogaSandhyaLandingPage"][0];
  console.log("data", data);

  return (
    <Box height="100%" width="100%">
      <Box
        height="70%"
        width="100%"
        paddingTop="60px"
        bg="linear-gradient(180deg, #681809 0%, #BA501A 100%)"
        clipPath="polygon(0 0%, 100% 12%, 100% 1000%, 0 1000%)"
      >
        <Flex direction="column">
          <Box width="32%" marginLeft="auto" marginRight="auto">
            <Image
              src={ys.icon.url}
              sizes="auto auto"
              margin="20px auto 40px auto"
            ></Image>
            {ys.descriptions.map((description) => {
              return (
                <ContentText marginTop="20px">{description.text}</ContentText>
              );
            })}
          </Box>
        </Flex>
        <Flex direction="column">
          <iframe
            width="650"
            height="315"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 40,
            }}
            src={ys.videoLink}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Flex>
      </Box>
      <Box height="30%" width="100%"></Box>
    </Box>
  );
}
export default YogaSandhya;
