package app;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


public class App {
    public static List<String> testMethod(){
    List<String> testList = List.of("one", "two", "three", "0.014", "100");
    List<String> testList2 = List.of("one", "two", "four", "0.025", "100");
    List<String> newList = new ArrayList<>();
    for (int i = 0; i < testList.size(); i++) {
    newList.add(testList2.get(i));
    }
    return newList;
    }

    public static List<List<String>> matchingTest(){
    Map<String, BigDecimal> totalsMap = new HashMap<>();
    List<List<String>> totalsList = new ArrayList<>();
    List<List<String>> returnList = new ArrayList<>();
    returnList.add(List.of("one", "two", "three", "0.010", "100"));
    returnList.add(List.of("one", "two", "three", "0.010", "100"));
    returnList.add(List.of("one", "two", "three", "0.010", "100"));
    returnList.add(List.of("one", "two", "three", "0.010", "100"));
    returnList.add(List.of("one", "two", "four", "0.020", "100"));
    returnList.add(List.of("one", "two", "four", "0.020", "100"));
    returnList.add(List.of("one", "two", "four", "0.020", "100"));
    returnList.add(List.of("one", "two", "four", "0.020", "100"));
    returnList.add(List.of("one", "three", "four", "0.040", "100"));
    returnList.add(List.of("one", "three", "four", "0.040", "100"));
    returnList.add(List.of("one", "three", "four", "0.040", "100"));
    returnList.add(List.of("one", "three", "four", "0.040", "100"));

    for(int i = 0; i < returnList.size(); i++){

        List<String> currentRow = returnList.get(i);
        String currentTaxonomy = currentRow.get(0)
        +"|"+currentRow.get(1)+"|"+currentRow.get(2);

        if(totalsMap.keySet().contains(currentTaxonomy)){

            BigDecimal price = totalsMap.get(currentTaxonomy);
            BigDecimal newPrice = price.add(new BigDecimal(currentRow.get(3)));
            totalsMap.put(currentTaxonomy, newPrice);

        }else{

            totalsMap.put(currentTaxonomy, new BigDecimal(currentRow.get(3)));

        }
    }
    // Loop through the key set to create new lists
    for(String key : totalsMap.keySet()){
        totalsList.add(List.of(key, totalsMap.get(key).toString()));
    }
    return totalsList;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(matchingTest());
    }
}