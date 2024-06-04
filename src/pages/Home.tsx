import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import sampleData from "../assets/sampleData.json";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text
        bg="purple.200"
        fontSize={48}
        fontWeight="bold"
        textAlign="center"
        textColor={"white"}
        mt={8}
      >
        Word App
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="purple"
            justifyContent="start"
            isTruncated={true}
            onClick={() =>
              navigate(`/daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text fontWeight="bold">Day {v.day}</Text> - {v.title}
          </Button>
        ))}
      </Flex>
      {/* 
      <Flex flexDir="column" mt={16} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="green"
            justifyContent="start"
            isTruncated={true}
            onClick={() =>
              navigate(`/another-daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text fontWeight="bold">Day {v.day}</Text> - {v.title}
          </Button>
        ))}
      </Flex> */}
    </Flex>
  );
};

export default Home;
