import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Code Translator" },
    {
      name: "description",
      content: "Translate code from one language to another using ChatGPT.",
    },
  ];
};

export default function Index() {
  const [selectedModel, setSelectedModel] = useState<"gpt-3.5" | "gpt-4">(
    "gpt-3.5"
  );
  const languages = ["Python", "Javascript", "Java"];
  const [inputLanguage, setInputLanguage] = useState<string>(languages[0]);
  const [outputLanguage, setOutputLanguage] = useState<string>(languages[1]);
  const [apiKey, setApiKey] = useState<string>();

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
              onChange={(v) => setApiKey(v.target.value)}
            />
            <Flex justify={"center"} gap={"4"}>
              <Select.Root defaultValue={selectedModel}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Models</Select.Label>
                    <Select.Item
                      value="gpt-3.5"
                      onClick={() => setSelectedModel("gpt-3.5")}
                    >
                      GPT-3.5 Turbo
                    </Select.Item>
                    <Select.Item
                      value="gpt-4"
                      onClick={() => setSelectedModel("gpt-4")}
                    >
                      GPT-4 Turbo
                    </Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
              <Button>Translate</Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Flex justify={"center"} gap={"4"}>
        <Card>
          <Flex justify={"center"} style={{ marginBottom: "10px" }}>
            <Select.Root defaultValue={inputLanguage}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Input Language</Select.Label>
                  <>
                    {languages.map((language, index) => {
                      return (
                        <Select.Item
                          value={language}
                          onClick={() => setInputLanguage(language)}
                          key={`input-${language}-${index}`}
                        >
                          {language}
                        </Select.Item>
                      );
                    })}
                  </>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>
          <TextArea style={{ minHeight: "60vh", minWidth: "30vw" }} />
        </Card>
        <Card>
          <Flex justify={"center"} style={{ marginBottom: "10px" }}>
            <Select.Root defaultValue={outputLanguage}>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Output Language</Select.Label>
                  <>
                    {languages.map((language, index) => {
                      return (
                        <Select.Item
                          value={language}
                          onClick={() => setOutputLanguage(language)}
                          key={`output-${language}-${index}`}
                        >
                          {language}
                        </Select.Item>
                      );
                    })}
                  </>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>
          <TextArea style={{ minHeight: "60vh", minWidth: "30vw" }} />
        </Card>
      </Flex>
    </>
  );
}
