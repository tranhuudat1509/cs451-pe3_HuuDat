import { StyleSheet } from "react-native";
import App from "/workspaces/cs451-pe3_HuuDat/PE03_todos/app/App/App";

export default function ActiveScreen() {
  return <App type="Active" />;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
