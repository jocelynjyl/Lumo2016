package com.clinictrails.clinictrails;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;

import java.util.ArrayList;

public class ClinicListAdapter extends ArrayAdapter<ClinicTrial> {

    public ClinicListAdapter(Context context, ArrayList<ClinicTrial> test) {
        super(context, R.layout.clinic_list_row, test);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        return convertView;
    }
}