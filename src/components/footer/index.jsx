import { useContext } from "react";
import { Context } from "../../context/context";
import { useTranslate } from "../../hooks/useTranslate";
import { generalTranslations } from"../../translations/generalTranslations";
import { Container, Stack, Text, Box } from "@chakra-ui/react";

export const Footer = () => {
  const context = useContext(Context);
  const translations = useTranslate(generalTranslations(context));

  return (
    <Box w={"100%"} mt="10%">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={"center"}
        align={{ base: "center", md: "center" }}
      >
        <Text color={context.clearTheme ? "black" : "white"} textAlign="center">
          &copy; {new Date().getFullYear()} {translations.createdBy}
        </Text>
      </Container>
    </Box>
  );
};
