import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import QuestionCard from "../../components/QuestionCard";
import AppContext from "../../context/app";

const QuestionsPage: NextPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" marginTop={20}>
      <Box w="3xl" className="question-container">
        <QuestionCard />
      </Box>
    </Flex>
  );
};

export default QuestionsPage;
