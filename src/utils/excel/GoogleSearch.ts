import GoogleImages from "google-images";

export default class GoogleSearch {
  static client = new GoogleImages(
    "006031170630015664588:gdmowpph51a",
    "AIzaSyDgidm7cDuAz5_ub0G4khTWXo1-kNxdbPY"
  );

  static search(keyword: string) {
    this.client.search(`tiki ${keyword}`).then(images => {
      console.log(images);
    });
  }
}
