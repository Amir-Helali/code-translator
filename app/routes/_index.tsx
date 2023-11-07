import {
  Button,
  Card,
  Container,
  DropdownMenu,
  Flex,
  Heading,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [selectedModel, setSelectedModel] = useState<"gpt-3.5" | "gpt-4">(
    "gpt-3.5"
  );
  const [inputLanguage, setInputLanguage] = useState<string>("");
  const [outputLanguage, setOutputLanguage] = useState<string>("");

  const languages = ["python", "javascript", "java"];

  return (
    <>
      <Flex direction={"column"} gap={"5"} style={{ marginBottom: "20px" }}>
        <Flex direction={"column"} gap={"0"}>
          <Heading align={"center"}>Code Translator</Heading>
          <Text size={"3"} align={"center"} as="div">
            Translate code from one language to another.
          </Text>
        </Flex>
        <Container size={"1"}>
          <Flex direction={"column"} gap={"4"}>
            <Text as="div" align={"center"}>
              API Key
            </Text>
            <TextField.Input
              placeholder="sk-****************"
              type="password"
              radius="large"
            />
            <Flex justify={"center"} gap={"4"}>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    Model
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item
                    onClick={() => setSelectedModel("gpt-3.5")}
                  >
                    GPT-3.5 Turbo
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setSelectedModel("gpt-4")}>
                    GPT-4 Turbo
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <Button>Translate</Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Flex justify={"center"} gap={"4"}>
        <Card>
          <Flex justify={"center"}>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft">
                  Input
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <>
                  {languages.map((language, index) => {
                    return (
                      <DropdownMenu.Item
                        onClick={() => setInputLanguage(language)}
                        key={`input-${language}-${index}`}
                      >
                        {language}
                      </DropdownMenu.Item>
                    );
                  })}
                </>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
          <TextArea style={{ minHeight: "60vh", minWidth: "30vw" }} />
        </Card>
        <Card>
          <Flex justify={"center"}>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft">
                  Output
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <>
                  {languages.map((language, index) => {
                    return (
                      <DropdownMenu.Item
                        onClick={() => setOutputLanguage(language)}
                        key={`output-${language}-${index}`}
                      >
                        {language}
                      </DropdownMenu.Item>
                    );
                  })}
                </>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
          <TextArea style={{ minHeight: "60vh", minWidth: "30vw" }} />
        </Card>
      </Flex>
    </>
  );
}
