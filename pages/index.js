import { Box, Flex, Heading, Text, Link, Grid } from "@chakra-ui/react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMailchimp,
  FaMailBulk,
} from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="#111"
      w="100vw"
      minW="100vw"
      minH="100vh"
    >
      <html lang="en">
      <Head>
        <title>Kerem Esen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      </html>
      
      <Flex
        direction="column"
        bg="#2222"
        w="70%"
        color="white"
        boxShadow="2xl"
        borderRadius={15}
        h="80%"
        minW="70%"
        justify="space-evenly"
      >
        <Flex direction="column" mx={8} minW="100%">
          <Heading letterSpacing={2} _selection={{ bg: "black" }}>
            KEREM ESEN{" "}
          </Heading>
          <Text fontSize="xl" as="samp" _selection={{ bg: "black" }}>
            {" "}
            FULL-STACK DEVELOPER
          </Text>
        </Flex>
        <Flex bg="#3333" h="25%" align="center" justify="center">
          <Text fontSize="xl" as="samp" _selection={{ bg: "black" }}>
            hi im kerem im 19 yo developer.im trying to learn and do something
            at reactjs/nextjs
          </Text>
        </Flex>

        <Flex
          w="100%"
          minW="100%"
          align="center"
          justify="space-around"
          direction={["column", "row"]}
          minW="100%"
        >
          <Link href="https://www.instagram.com/keremeesen" isExternal>
            <Flex justify="center" align="center" direction="column">
              <Heading size="md" _selection={{ bg: "black" }}>
                Instagram
              </Heading>
              <FaInstagram />
              <Text as="samp" _selection={{ bg: "black" }}>
                keremeesen
              </Text>
            </Flex>
          </Link>
          <Link href="https://www.twitter.com/kerooxd" isExternal size="16px">
            <Flex justify="center" align="center" direction="column">
              <Heading size="md" _selection={{ bg: "black" }}>
                Twitter
              </Heading>
              <FaTwitter />
              <Text as="samp" _selection={{ bg: "black" }}>
                kerooxd
              </Text>
            </Flex>
          </Link>
          <Link href="https://www.github.com/keremesen" isExternal size="16px">
            <Box w="100%" h="100%" textAlign="center">
              <Flex justify="center" align="center" direction="column">
                <Heading size="md" _selection={{ bg: "black" }}>
                  GitHub
                </Heading>
                <FaGithub />
                <Text as="samp" _selection={{ bg: "black" }}>
                  keremesen
                </Text>
              </Flex>
            </Box>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kerem-esen-55a1941bb/"
            isExternal
            size="16px"
          >
            <Flex justify="center" align="center" direction="column">
              <Heading size="md" as="samp" _selection={{ bg: "black" }}>
                LinkedIn
              </Heading>
              <FaLinkedin />
              <Text _selection={{ bg: "black" }}>keremesen</Text>
            </Flex>
          </Link>
          <Link href="mailto:kerem.esen.01@hotmail.com" isExternal>
            <Flex justify="center" align="center" direction="column">
              <Heading size="md" _selection={{ bg: "black" }}>
                Mail
              </Heading>
              <FaMailBulk />
              <Text as="samp" fontSize="sm" _selection={{ bg: "black" }}>
                kerem.esen.01@hotmail.com
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
