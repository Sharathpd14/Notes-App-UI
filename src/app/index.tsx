import React, { useState } from "react";

import {
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const USERS = [
    {
      id: "1",
      title: "Cook a Dish",
      note: "Get all ingredients from the nearby store and prepare chicken biriyani for dinner with extra masala and boiled eggs for everyone at home.",
      date: "10-05-2026",
    },
    {
      id: "2",
      title: "Gym Workout",
      note: "Complete full body workout session including chest, back, shoulders, and cardio for at least one hour without skipping warmup exercises.",
      date: "11-05-2026",
    },
    {
      id: "3",
      title: "Project Meeting",
      note: "Attend the online client meeting and explain the mobile application progress along with upcoming features and deployment timeline clearly.",
      date: "12-05-2026",
    },
    {
      id: "4",
      title: "Study React Native",
      note: "Practice React Native concepts including FlatList, navigation, hooks, responsive design, and API integration by building small components.",
      date: "13-05-2026",
    },
    {
      id: "5",
      title: "Room Cleaning",
      note: "Clean the entire room properly including table setup, wardrobe arrangement, floor mopping, and removing unnecessary unused items from shelves.",
      date: "14-05-2026",
    },
  ];

  return (
    <SafeAreaView
      style={[
        styles.home,
        {
          backgroundColor: darkMode ? "#1E1E1E" : "#EEF5F5",
        },
      ]}
    >
      <StatusBar
        backgroundColor={darkMode ? "#111111" : "#EEF5F5"}
        barStyle={darkMode ? "light-content" : "dark-content"}
      />

      {/* Search Bar */}
      <View
        style={[
          styles.nav,
          {
            backgroundColor: darkMode ? "#2A2A2A" : "#DCE8E7",
          },
        ]}
      >
        <TextInput
          placeholder="📝 Search your note..."
          placeholderTextColor={darkMode ? "#9CA3AF" : "#6B7280"}
          style={[
            styles.inputBox,
            {
              backgroundColor: darkMode ? "#3A3A3A" : "#FFFFFF",

              color: darkMode ? "#FFFFFF" : "#111827",
            },
          ]}
        />

        <View style={styles.switchContainer}>
          <Switch
            style={styles.toggleStyle}
            value={darkMode}
            onValueChange={() => setDarkMode(!darkMode)}
            trackColor={{
              false: "#CBD5E1",
              true: "#6B7280",
            }}
            thumbColor={darkMode ? "#FFFFFF" : "#F8FAFC"}
          />
        </View>
      </View>

      {/* Notes */}
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 120,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
        renderItem={({ item }) => (
          <Pressable onPress={() => Alert.alert(item.title, item.note)}>
            <View
              style={[
                styles.notes,
                {
                  backgroundColor: darkMode ? "#2A2A2A" : "#DCE8E7",
                },
              ]}
            >
              <View style={styles.headerRow}>
                <Text
                  style={[
                    styles.noteTitle,
                    {
                      color: darkMode ? "#FFFFFF" : "#111827",
                    },
                  ]}
                >
                  {item.title}
                </Text>

                <Text
                  style={[
                    styles.dateText,
                    {
                      color: darkMode ? "#E5E7EB" : "#4B5563",
                    },
                  ]}
                >
                  {item.date}
                </Text>
              </View>

              <Text
                numberOfLines={2}
                style={[
                  styles.noteDetail,
                  {
                    color: darkMode ? "#E5E7EB" : "#374151",
                  },
                ]}
              >
                {item.note}
              </Text>
            </View>
          </Pressable>
        )}
      />

      {/* Floating Button */}
      <Pressable
        style={[
          styles.fab,
          {
            backgroundColor: darkMode ? "#FFFFFF" : "#111827",
          },
        ]}
      >
        <Image
          source={require("../../assets/images/plus_icon_152556.png")}
          style={[
            styles.addIcon,
            {
              tintColor: darkMode ? "#111827" : "#FFFFFF",
            },
          ]}
        />
      </Pressable>
    </SafeAreaView>
  );
};

const NoteEditorScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <SafeAreaView style={colors.container}>
      <StatusBar backgroundColor="#111827" barStyle="light-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Header */}
        <View style={colors.header}>
          <Text style={colors.headerTitle}>Create Note</Text>

          <Text style={colors.headerSubtitle}>
            Write down your thoughts and ideas
          </Text>
        </View>

        {/* Buttons */}
        <View style={colors.buttonRow}>
          <Pressable
            style={({ pressed }) => [
              colors.button,
              colors.backButton,
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}
            onPress={() => console.log("Back")}
          >
            <Text style={colors.buttonText}>Back</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              colors.button,
              colors.saveButton,
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}
            onPress={() => console.log("Save Note")}
          >
            <Text style={colors.buttonText}>Save</Text>
          </Pressable>
        </View>

        {/* Inputs */}
        <View style={colors.inputContainer}>
          <TextInput
            placeholder="Enter note title..."
            placeholderTextColor="#6B7280"
            value={title}
            onChangeText={setTitle}
            style={colors.titleInput}
          />

          <TextInput
            placeholder="Write your note here..."
            placeholderTextColor="#6B7280"
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
            style={colors.noteInput}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NoteEditorScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },

  nav: {
    height: 78,
    width: "92%",

    alignSelf: "center",

    marginTop: 12,

    borderRadius: 24,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  inputBox: {
    flex: 1,

    height: 50,

    borderRadius: 18,

    paddingHorizontal: 18,

    fontSize: 17,

    marginRight: 12,
  },

  switchContainer: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(255,255,255,0.2)",

    borderRadius: 50,

    paddingHorizontal: 4,
    paddingVertical: 2,
  },

  toggleStyle: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },

  notes: {
    borderRadius: 24,

    paddingHorizontal: 16,
    paddingVertical: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,

    elevation: 5,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginBottom: 10,
  },

  noteTitle: {
    fontSize: 22,
    fontWeight: "800",

    maxWidth: "68%",

    letterSpacing: 0.3,
  },

  dateText: {
    fontSize: 13,
    fontWeight: "700",

    backgroundColor: "rgba(255,255,255,0.15)",

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 20,
  },

  noteDetail: {
    fontSize: 15,

    lineHeight: 22,

    opacity: 0.92,
  },

  fab: {
    position: "absolute",

    bottom: 30,
    right: 25,

    width: 68,
    height: 68,

    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 10,
  },

  addIcon: {
    width: 30,
    height: 30,
  },
});

const colors = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    backgroundColor: "#111827",
    paddingTop: 35,
    paddingBottom: 30,
    paddingHorizontal: 20,

    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#D1D5DB",
    fontSize: 16,
    marginTop: 8,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  button: {
    width: 120,
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    backgroundColor: "#6B7280",
  },

  saveButton: {
    backgroundColor: "#111827",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 25,
  },

  titleInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    height: 60,
    fontSize: 20,
    fontWeight: "700",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  noteInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginTop: 20,
    padding: 18,
    fontSize: 18,
    flex: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 3,
  },
});
