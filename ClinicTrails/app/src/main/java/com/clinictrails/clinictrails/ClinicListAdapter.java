package com.clinictrails.clinictrails;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.ArrayList;

public class ClinicListAdapter extends ArrayAdapter<ClinicTrial> {

    private TextView titleText;
    private TextView ageText;
    private TextView locationText;

    private ArrayList<ClinicTrial> ct = new ArrayList<ClinicTrial>();

    public ClinicListAdapter(Context context, ArrayList<ClinicTrial> ct) {
        super(context, R.layout.clinic_list_row, ct);
        this.ct = ct;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.clinic_list_row, parent, false);
        }

        // initialize row textviews
        titleText = (TextView) convertView.findViewById(R.id.titleText);
        ageText = (TextView) convertView.findViewById(R.id.ageText);
        locationText = (TextView) convertView.findViewById(R.id.locationText);

        // set the textviews to their corresponding values
        titleText.setText(ct.get(position).getTitle());
        ageText.setText(ct.get(position).getAge());
        locationText.setText(ct.get(position).getLocation());

        return convertView;
    }
}