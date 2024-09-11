#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
   vector <int> height ={1,8,6,2,5,4,8,3,7};
        int current_left=0;
        int left_right_ptr=1;
        int current_right=height.size()-2;
        int right_left_ptr=height.size()-3;
        int length=height.size();
        if(length<=2){
            return 1*min(height.at(1),height.at(0));
    }
    else if(length%2==1){
        for(int i=1; i<(length-2)/2;i++){
            if(height.at(current_left)*(left_right_ptr-current_left)<height.at(left_right_ptr)){
                current_left=left_right_ptr;
            }
            if(height.at(current_right)*(current_right-right_left_ptr)<height.at(right_left_ptr)){
                current_left=left_right_ptr;
            }
            left_right_ptr++;
            right_left_ptr--;

        }
        if(height.at(current_left)*(left_right_ptr-current_left)<height.at(left_right_ptr)){
                current_left=left_right_ptr;
            }
    }else{
for(int i=1; i<=(length-2)/2;i++){
            if(height.at(current_left)*(left_right_ptr-current_left)<height.at(left_right_ptr)){
                current_left=left_right_ptr;
            }
            if(height.at(current_right)*(current_right-right_left_ptr)<height.at(right_left_ptr)){
                current_left=left_right_ptr;
            }
            left_right_ptr++;
            right_left_ptr++;

        }
       
    }
    int output=(current_right-current_left)*min(current_left,current_right);
        return (output);

    }