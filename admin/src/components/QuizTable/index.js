import React from "react";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { Eye, EyeStriked } from "@strapi/icons";
import {
  Box,
  Button,
  IconButton,
  Typography,
  BaseCheckbox,
  VisuallyHidden,
} from "@strapi/design-system";
import { EmptyBodyTable } from "@strapi/helper-plugin";

const QuizTable = ({
  quizzes = [],
  onSelect = () => {},
  isLoading = false,
  selected = null,
}) => {
  return (
    <Table rowCount={1} colCount={4}>
      <Thead>
        <Tr>
          <Th>
            <Typography variant="sigma">Quiz Title</Typography>
          </Th>
          <Th>
            <Typography variant="sigma">Quiz Description</Typography>
          </Th>
          <Th>
            <VisuallyHidden>Actions</VisuallyHidden>
          </Th>
        </Tr>
      </Thead>

      {isLoading && <EmptyBodyTable isLoading={isLoading} colSpan={4} />}
      {!isLoading && quizzes && (
        <Tbody>
          {quizzes.map((quiz) => (
            <Tr key={quiz.id}>
              <Td>
                <Typography>{quiz.attributes.title}</Typography>
              </Td>
              <Td>
                <Typography>{quiz.attributes.description}</Typography>
              </Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Box marginRight={2}>
                    <IconButton
                      variant="ghost"
                      icon={
                        selected && selected.id == quiz.id ? (
                          <EyeStriked />
                        ) : (
                          <Eye />
                        )
                      }
                      onClick={() => onSelect(quiz)}
                    />
                  </Box>
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      )}
    </Table>
  );
};

export default QuizTable;
