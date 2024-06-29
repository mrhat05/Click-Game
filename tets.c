#include<stdio.h>

int main(){
    
    for (int i=0; i<=9;i++){
        for (int j=0;j<=9;j++){
            if(i==j)printf("*");
       
            if(i>j)printf("#");
            
            if(i<j)printf("?");
          }
          
    }
}