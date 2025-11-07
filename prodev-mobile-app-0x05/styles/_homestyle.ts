import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#067A6F", // Top green background
    paddingTop: 40,
  },

  /* -----------------------------
     SEARCH BAR SECTION
  ------------------------------*/
  searchGroup: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  searchFormGroup: {
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 4,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 14,
    color: "#555",
  },

  searchControl: {
    paddingVertical: 2,
    fontSize: 13,
  },

  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#FF9D00", // Orange search button
    alignItems: "center",
    justifyContent: "center",
  },

  /* -----------------------------
     FILTER (HORIZONTAL TABS)
  ------------------------------*/
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },

  filterContainer: {
    alignItems: "center",
    marginRight: 25,
    width: 70,
  },

  /* -----------------------------
     LISTINGS SECTION
  ------------------------------*/
  listingContainer: {
    backgroundColor: "#F2F2F2",
    paddingTop: 20,
    paddingHorizontal: 15,
  },

  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "black",
    width: 150,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
