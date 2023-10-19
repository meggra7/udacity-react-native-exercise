import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { AppColors, styles } from "./styles";
import NavigationBar from "../../NavigationInReactNative/PuttingItAllTogether/NavigationBar";
import { useNavigationState } from "@react-navigation/native";

export default function MobileScreensAndStylingExerciseThree() {
  const navigationType = useNavigationState((state) => state.type);

  const colorPalette = [
    {
      name: "Primary Text",
      hexColor: AppColors.textPrimary,
      isDarkShade: true,
    },
    {
      name: "Accent",
      hexColor: AppColors.accent,
      isDarkShade: false,
    },
    {
      name: "Accent Dark",
      hexColor: AppColors.accentDark,
      isDarkShade: true,
    },
    {
      name: "Warn",
      hexColor: AppColors.warn,
      isDarkShade: false,
    },
    {
      name: "Alert",
      hexColor: AppColors.alert,
      isDarkShade: true,
    },
  ];

  const ColorSwatch = ({ name, hexColor, isDarkShade }, index) => (
    <View
      style={{
        ...styles.colorSwatch,
        backgroundColor: hexColor,
      }}
      key={`color-swatch-${index}`}
    >
      <Text
        style={{
          color: isDarkShade ? "white" : "black",
          fontSize: 10,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {name}
        {"\n"}
        {hexColor}
      </Text>
    </View>
  );

  const insertUrlLink = (linkText, url) => (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text
        style={{
          color: AppColors.textPrimary,
          textDecorationLine: "underline",
        }}
      >
        {linkText}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView>
      {navigationType === "stack" && (
        <NavigationBar
          previousScreen="Mobile Screens And Styling Exercise Two Pop"
          nextScreen="Mobile Screens And Styling Exercise One Push"
        />
      )}
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <Text style={styles.title}>This is a title</Text>
        <Text style={styles.header}>This is a header</Text>
        <Text style={styles.body}>This is body text.</Text>
        <View
          style={{
            ...styles.body,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: AppColors.textPrimary }}>This is a </Text>
          {insertUrlLink(
            "link",
            "https://www.udacity.com/course/react-native--cd0444"
          )}
          <Text style={{ color: AppColors.textPrimary }}>.</Text>
        </View>
        <Image
          source={require("../../../../assets/img/autumn.png")}
          style={{ height: 200, width: "100%", marginTop: 16 }}
        />
        <Text style={styles.imageCaption}>This is an image caption</Text>
        <Text style={styles.header}>Color palette</Text>
        <Text style={styles.body}>
          This is the app's autumn-inspired color palette.
        </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: 8,
            margin: 16,
            marginBottom: 8,
          }}
        >
          {colorPalette.map((color, index) => ColorSwatch(color, index))}
        </View>
        <Text style={{ ...styles.body, marginBottom: 16 }}>
          Here is some long form text to demonstrate the ability to scroll.
          {"\n\n"}Cupcake ipsum dolor sit amet. Lemon drops candy canes chupa
          chups cotton candy cupcake cotton candy. Soufflé pudding lollipop
          donut powder biscuit lemon drops pie biscuit. Chocolate topping
          jelly-o liquorice cake dessert croissant. Cake biscuit pastry
          chocolate bar sesame snaps tootsie roll lemon drops gingerbread sweet.
          Topping brownie pie icing candy canes wafer liquorice pudding jujubes.
          Cake cookie gummi bears apple pie marshmallow lemon drops lemon drops
          sesame snaps. Cheesecake candy canes macaroon biscuit sugar plum
          dragée brownie halvah. Shortbread marshmallow cupcake powder muffin
          bear claw tart cake pastry.
          {"\n\n"}Powder lollipop pastry muffin chocolate cake tiramisu candy
          canes pudding jelly beans. Chupa chups dessert biscuit soufflé
          caramels chocolate cake jelly-o gingerbread. Liquorice chocolate cake
          gummi bears gummies muffin shortbread toffee marzipan. Danish lemon
          drops danish pudding gummi bears soufflé tootsie roll halvah.
          Cheesecake cake shortbread apple pie chocolate dessert cotton candy
          dessert. Apple pie pastry sugar plum cotton candy cotton candy lemon
          drops oat cake. Liquorice cupcake bear claw chocolate bar sesame snaps
          croissant oat cake powder. Pastry sweet gingerbread fruitcake tiramisu
          tart bonbon. Oat cake cheesecake tiramisu gummies oat cake chupa chups
          cupcake chupa chups pie. Cake chocolate chocolate bar chupa chups
          halvah biscuit croissant pastry.{"\n\n"}Bonbon dragée pastry candy
          marzipan fruitcake croissant. Jelly-o toffee danish carrot cake
          croissant marzipan cupcake topping. Sesame snaps soufflé liquorice
          wafer lollipop pastry soufflé. Bear claw croissant lemon drops sesame
          snaps jujubes lollipop apple pie toffee pudding. Toffee dragée biscuit
          dessert chupa chups fruitcake. Dessert tootsie roll sweet roll wafer
          halvah tootsie roll dessert candy canes. Jujubes macaroon toffee
          muffin dragée tootsie roll donut donut tart. Sweet roll cake apple pie
          chupa chups cupcake cake.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
