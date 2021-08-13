console.clear()
console.log(Date.now())


let _FML_ABBRV = "ssml"
let _FML_ROOT = "speak"
let _FML_ELEMENTS = ["ssml-break-0","ssml-prosody-1","ssml-sub-1","ssml-say-as-1"]
let _HTML_ELEMENTS = ["ARTICLE","ASIDE"]

let _FML_LOC = []
let _FML_LOC_RANGE = []
let _FML_EL = []
let _FML_EL_TYPE = []
let _FML_EL_ATTR = []
let _FML_FINAL = ""
let _FML_FINAL_ARR = []
let _CURR_FML_LOC = ""
let _CURR_FML_LOC_RANGE = ""
let _CURR_FML_EL = ""
let _CURR_FML_EL_TYPE = ""
let _CURR_FML_EL_ATTR = ""


function ProcessFML(){

  $("*[data-" + _FML_ABBRV + "*='" + _FML_ROOT + "']").each(function(){
    _FML_FINAL = "<" + _FML_ROOT +">"
    
    // ===== START Get FML in HTML attributes
    for(let se = 0; se < _FML_ELEMENTS.length; se++){ 
      
      if(jQuery(this).data(_FML_ELEMENTS[se]) !== undefined) {
        _CURR_FML_EL = _FML_ELEMENTS[se].substr(5, _FML_ELEMENTS[se].length - 7)
        _CURR_FML_EL_TYPE = _FML_ELEMENTS[se].substr(_FML_ELEMENTS[se].length - 1, 1)
        
        let split_keyvalue = jQuery(this).data(_FML_ELEMENTS[se]).trim().split(";");
        for(let sk = 0; sk < split_keyvalue.length; sk++){
          if(split_keyvalue[sk] != ""){
            _CURR_FML_LOC = ""
            _CURR_FML_EL_ATTR = ""
            
            ProcessDataEl(split_keyvalue[sk].trim())
          }
        }
      }
    }
    // ===== END Get FML in HTML attributes
    

    // ===== START Generate FML
    let speechText = jQuery(this).text().trim().split(" ")
    for(let i=0; i < speechText.length; i++){
      let idx = _FML_LOC.indexOf("A" + i)
      
      if(idx != -1) {
        if(_FML_LOC_RANGE[idx].trim().length > 0){
          
          let loc_range_split = _FML_LOC_RANGE[idx].split("-")
          let the_range = parseInt(loc_range_split[1]) - parseInt(loc_range_split[0]) +1
          let sentence = ""
          for(let j=0; j < the_range; j++){
            sentence += speechText[i] + " "
            i += 1
          }
          i -= 1
          _FML_FINAL += GenerateFMLTag(idx,sentence.trim())
        } else {
          _FML_FINAL += GenerateFMLTag(idx,speechText[i])
        }
      } else {
        _FML_FINAL +=  speechText[i]
      }
      
      if(i != speechText.length - 1){
        _FML_FINAL += " "
      } 
    }
    
    //Remove all elements in array
    _FML_LOC.splice(0, _FML_LOC.length)
    _FML_LOC_RANGE.splice(0, _FML_LOC_RANGE.length)
    _FML_EL.splice(0, _FML_EL.length) 
    _FML_EL_TYPE.splice(0, _FML_EL_TYPE.length) 
    _FML_EL_ATTR.splice(0, _FML_EL_ATTR.length)
    // ===== END Generate FML
    
    _FML_FINAL += "</" + _FML_ROOT +">"
    _FML_FINAL_ARR.push(_FML_FINAL)
  })
  
  return _FML_FINAL_ARR
  
}

function ProcessDataEl(set){
  _CURR_FML_EL_ATTR = ""
    //remove word "set:", then split by "," 
  let split_set = set.trim().replace("set:","").trim().split(",") 

  //get loc info first
  for(let i = 0; i < split_set.length; i++){
    if(GetSetKey(split_set[i].trim()) == "loc"){
      let loc_val = split_set[i].trim().replace("loc(","").replace(")","")
      let loc_val_split = loc_val.split("|")
      
      if(loc_val_split.length == 1) {
        //single loc
        _CURR_FML_LOC = parseInt(loc_val) - 1
        if(IsLocRange(loc_val_split[0])){
          _CURR_FML_LOC_RANGE = loc_val_split[0]
        } else {
          _CURR_FML_LOC_RANGE = ""
        }
        GetFMLInfo(split_set)
        
      } else {
        //multiple loc
        for(j = 0; j < loc_val_split.length; j++){
          _CURR_FML_LOC = parseInt(loc_val_split[j]) - 1
          if(IsLocRange(loc_val_split[j])){
            _CURR_FML_LOC_RANGE = loc_val_split[j]
          } else {
            _CURR_FML_LOC_RANGE = ""
          }
          GetFMLInfo(split_set)
        }
      }
    }
  }
}

  function GetFMLInfo(split_set){
  for(let i = 0; i < split_set.length; i++){
    if(GetSetKey(split_set[i].trim()) != "loc"){
      _CURR_FML_EL_ATTR += GetSetKeyValue(split_set[i].trim()) + " "
    }
  }
  
  if(_CURR_FML_EL_TYPE == 0) {_CURR_FML_LOC += 1}
  
  PushToFMLArr(_CURR_FML_LOC, _CURR_FML_LOC_RANGE, _CURR_FML_EL, _CURR_FML_EL_TYPE, _CURR_FML_EL_ATTR.trim())
}

function GenerateFMLTag(source_loc, source_val){
  let temp = ""
  
  temp = "<"
  temp += _FML_EL[source_loc] + " "
  temp += _FML_EL_ATTR[source_loc]
  
  if(_FML_EL_TYPE[source_loc] == 0){
    temp += "/>"
    temp += " " + source_val
  } else {
    temp += ">"
    temp += source_val
    temp += "</"
    temp += _FML_EL[source_loc]
    temp += ">"
  }
  
  return temp
}

function PushToFMLArr(loc, loc_range, el, el_type, el_attr){
  _FML_LOC.push("A" + loc)
  _FML_LOC_RANGE.push(loc_range)
  _FML_EL.push(el)
  _FML_EL_TYPE.push(el_type)
  _FML_EL_ATTR.push(el_attr)
}

// ==== START Utilities functions
function IsLocRange(val){
  if(val.split("-").length > 1){
    return true
  } else {
    return false
  }
}

function GetSetKeyValue(str){
  let temp = str.trim().replace("(","=\"").replace(")","\"");
  return temp;
}

function GetSetKey(str){
  let temp = str.trim().replace("(","=\"").replace(")","\"");
  return temp.substr(0,temp.indexOf("=")).trim();
}
// ==== END Utilities functions

//============================================================
let result = ProcessFML()
jQuery("#processArticleFmlAlert").click(function(){
  $("#articleResult").html(result[0])
})

jQuery("#processArticleFmlClear").click(function(){
  $("#articleResult").html("")
})

jQuery("#processArticleFmlConsole").click(function(){
  console.log(result[0])
})

jQuery("#processAsideFmlAlert").click(function(){
  $("#asideResult").html(result[1])
})

jQuery("#processAsideFmlClear").click(function(){
  $("#asideResult").html("")
})

jQuery("#processAsideFmlConsole").click(function(){
  $("#asideResult").html(result[1])
  console.log(result[1])
})