import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "graphql-hooks";
import "../App.css";

const CardQuery = `query {
    sadhguruDemoCard {
      videoDesc
      heading
      date
      videoIcon {
        url
      }
      shareIcon {
        alt
        url
        video {
          thumbnailUrl
        }
      }
      sadhguruPic {
        url
        filename
        alt
      }
    }
  }`;

function SadhguruCard() {
  const { loading, error, data } = useQuery(CardQuery);
  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";
  const cardContentObject = data["sadhguruDemoCard"];
  console.log("data", cardContentObject);

  return (
    <a href="https://isha.sadhguru.org/in/en/wisdom/video/why-sadhguru-drank-venom">
      <Card
        maxW="md"
        bg="white"
        boxShadow="md"
        _hover={{ boxShadow: "lg" }}
        cursor="pointer"
        marginLeft="auto"
        marginRight="auto"
        marginTop="20px"
      >
        <CardBody>
          <Image
            src={cardContentObject["sadhguruPic"].url}
            alt={cardContentObject.heading}
            sizes="md md"
          ></Image>
          <Box>
            <Box
              transform="skew(0deg,-5deg)"
              height="47px"
              marginTop={-30}
              bg="white"
              position={"relative"}
            >
              <Flex direction="row" justify="flex-end" alignItems="center">
                <Text transform="skew(0deg,5deg)" marginTop="12px">
                  Video
                </Text>
                <Image
                  transform="skew(0deg,5deg)"
                  marginTop="20px"
                  src={cardContentObject.videoIcon.url}
                ></Image>
              </Flex>
            </Box>
            <Heading position="relative">{cardContentObject.heading}</Heading>
            <Text>{cardContentObject.videoDesc}</Text>
          </Box>
          <Box marginTop={3}>
            <Flex spacing="2" justifyContent="space-between">
              <Text variant="solid" colorScheme="blue">
                {cardContentObject.date}
              </Text>
              <Image src={cardContentObject.shareIcon.url}></Image>
            </Flex>
          </Box>
        </CardBody>
      </Card>
    </a>
  );
}
export default SadhguruCard;
