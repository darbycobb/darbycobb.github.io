import pandas as pd
import numpy as np

'''
    To be implemented as flask application later
'''
def get_state_data():
    #print(os.path.dirname("../../data/states/Minnesota/State Report/RUCA visuals/RUCA matched/med_ruca2_matched_LZ_11digit.csv"))

    med = pd.read_csv(open("../../data/states/Minnesota/State Report/RUCA visuals/RUCA matched/med_ruca2_matched_LZ_11digit.csv"), sep=',')
    chip = pd.read_csv(open("../../data/states/Minnesota/State Report/RUCA visuals/RUCA matched/chip_ruca2_matched_LZ_11digit.csv"), sep=',')
    bod = pd.read_csv(open("../../data/states/Minnesota/State Report/RUCA visuals/RUCA matched/bod_ruca2_final_match_edited2.csv"), sep=',')
    
    # For loop through all states
        # Read Data File in standardized folder
        # If state == "specific state":
            # run data cleaning script
            # append results to master county file
    # return county file
    print(med)
    

get_state_data()

class cleaner():

    def __init__(self):
        self.county = county
'''
    def minnesota():

        self.county.append(cleaned_minnesota)
        return file

    def arizona():
        self.county.append(cleaned_minnesota)
        return file'''