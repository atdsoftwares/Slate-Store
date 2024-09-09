import { useFilterContext } from "../../Context/AllContextIndex";
import { Rating } from "../../Components/AllComponentIndex";
import { clearState } from "../../Services/AddressServices";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function Sidebar() {
  const { state, dispatch } = useFilterContext();
  const { rating, stock } = state;

  const clearStateHandler = (e, dispatch) => {
    clearState(e, dispatch);
  };

  return (
    <Box
      w="250px"
      h="100vh"
      p={4}
      borderRightWidth={1}
      position="fixed"
      left={0}
      top={0}
      mt={12}
      overflowY="auto"
      color="gray.800"
    >
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Short by Price</FormLabel>
          <RadioGroup defaultValue="lowToHigh">
            <Stack spacing={2}>
              <Radio
                value="highToLow"
                onChange={() => dispatch({ type: "SORT", payload: false })}
              >
                High to Low
              </Radio>
              <Radio
                value="lowToHigh"
                onChange={() => dispatch({ type: "SORT", payload: true })}
              >
                Low to High
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Price Range</FormLabel>
          <Slider
            aria-label="price-range"
            defaultValue={[106, 120]}
            min={106}
            max={120}
            onChange={(val) => dispatch({ type: "SLIDER", payload: val[1] })}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>

        <FormControl>
          <FormLabel>Rating</FormLabel>
          <Rating
            rating={rating}
            onClick={(i) => dispatch({ type: "RATING", payload: i + 1 })}
            className="cursor-pointer"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Categories</FormLabel>
          <Stack spacing={2}>
            <Checkbox
              onChange={() => dispatch({ type: "diesel" })}
              defaultChecked={state.diesel}
            >
              Diesel
            </Checkbox>
            <Checkbox
              onChange={() => dispatch({ type: "petrol" })}
              defaultChecked={state.petrol}
            >
              Petrol
            </Checkbox>
            <Checkbox
              onChange={() => dispatch({ type: "ev" })}
              defaultChecked={state.ev}
            >
              EV
            </Checkbox>
          </Stack>
        </FormControl>

        <FormControl>
          <Checkbox
            onChange={(e) =>
              dispatch({ type: "STOCK", payload: e.target.checked })
            }
            defaultChecked={stock}
          >
            Exclude Out Of Stock
          </Checkbox>
        </FormControl>

        <Button
          colorScheme="red"
          onClick={(e) => clearStateHandler(e, dispatch)}
        >
          Clear Filters
        </Button>
      </Stack>
    </Box>
  );
}

export { Sidebar };
