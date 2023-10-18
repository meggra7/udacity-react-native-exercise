import { Image, Linking, Pressable, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function MobileScreensAndStylingExerciseOne() {
  const onPress = () => {
    Linking.openURL("https://www.udacity.com/course/react-native--cd0444");
  };

  const onLongPress = () => {
    console.log("Button long pressed!");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image
        source={require("../../../../assets/img/brooklyn_bridge.png")}
        style={{
          marginBottom: 20,
          height: 200,
          width: "100%",
        }}
      />

      <Text style={{ marginBottom: 20 }}>Hello World!</Text>

      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 6,
          backgroundColor: "#48D1CC",
        }}
      >
        <Text style={{ textTransform: "uppercase" }}>Press me!</Text>
      </Pressable>

      <Text style={{ margin: 20 }}>
        Cupcake ipsum dolor sit amet. Lemon drops candy canes chupa chups cotton
        candy cupcake cotton candy. Soufflé pudding lollipop donut powder
        biscuit lemon drops pie biscuit. Chocolate topping jelly-o liquorice
        cake dessert croissant. Cake biscuit pastry chocolate bar sesame snaps
        tootsie roll lemon drops gingerbread sweet. Topping brownie pie icing
        candy canes wafer liquorice pudding jujubes. Cake cookie gummi bears
        apple pie marshmallow lemon drops lemon drops sesame snaps. Cheesecake
        candy canes macaroon biscuit sugar plum dragée brownie halvah.
        Shortbread marshmallow cupcake powder muffin bear claw tart cake pastry.
        {"\n\n"}Powder lollipop pastry muffin chocolate cake tiramisu candy
        canes pudding jelly beans. Chupa chups dessert biscuit soufflé caramels
        chocolate cake jelly-o gingerbread. Liquorice chocolate cake gummi bears
        gummies muffin shortbread toffee marzipan. Danish lemon drops danish
        pudding gummi bears soufflé tootsie roll halvah. Cheesecake cake
        shortbread apple pie chocolate dessert cotton candy dessert. Apple pie
        pastry sugar plum cotton candy cotton candy lemon drops oat cake.
        Liquorice cupcake bear claw chocolate bar sesame snaps croissant oat
        cake powder. Pastry sweet gingerbread fruitcake tiramisu tart bonbon.
        Oat cake cheesecake tiramisu gummies oat cake chupa chups cupcake chupa
        chups pie. Cake chocolate chocolate bar chupa chups halvah biscuit
        croissant pastry.{"\n\n"}Bonbon dragée pastry candy marzipan fruitcake
        croissant. Jelly-o toffee danish carrot cake croissant marzipan cupcake
        topping. Sesame snaps soufflé liquorice wafer lollipop pastry soufflé.
        Bear claw croissant lemon drops sesame snaps jujubes lollipop apple pie
        toffee pudding. Toffee dragée biscuit dessert chupa chups fruitcake.
        Dessert tootsie roll sweet roll wafer halvah tootsie roll dessert candy
        canes. Jujubes macaroon toffee muffin dragée tootsie roll donut donut
        tart. Sweet roll cake apple pie chupa chups cupcake cake.{"\n\n"}Jelly-o
        gummies gummi bears sugar plum donut muffin chocolate cake chocolate.
        Lollipop cookie tart shortbread chupa chups. Chocolate bar brownie
        jujubes shortbread fruitcake fruitcake tart cake. Pudding gummi bears
        pudding icing caramels apple pie chupa chups. Jujubes danish muffin
        tiramisu jelly-o macaroon sugar plum pudding icing. Liquorice icing
        sweet roll marshmallow cake.{"\n\n"}Cake caramels chupa chups tiramisu
        croissant liquorice chupa chups toffee. Candy canes gummi bears dragée
        lemon drops biscuit. Cake sesame snaps ice cream toffee apple pie. Icing
        cupcake shortbread fruitcake oat cake toffee gummies. Cupcake dessert
        dragée carrot cake bear claw. Croissant gingerbread gingerbread danish
        tart bonbon marshmallow.
      </Text>
    </ScrollView>
  );
}
