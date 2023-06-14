package   ma.sir.easystock.ws.dto;

import  ma.sir.easystock.zynerator.audit.Log;
import  ma.sir.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class ClientDto  extends AuditBaseDto {

    private String fullName  ;
    private String email  ;




    public ClientDto(){
        super();
    }



    @Log
    public String getFullName(){
        return this.fullName;
    }
    public void setFullName(String fullName){
        this.fullName = fullName;
    }

    @Log
    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }






}
