(function ($) {
    Drupal.behaviors.ci5 = {
        attach: function (context, settings) {
            jQuery('input.float').keypress(function (event) {
                var allowNegative = jQuery(this).attr('allow-negative') || false;
                if (isNumberPressed(this, event, allowNegative) === false) {
                    event.preventDefault();
                }
            });
        }
    }
})(jQuery)

webform.validators.ci5 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    /*01-102*/
    var fields_table1_c1 = jQuery('#CAP2 tbody tr td:nth-child(3)').find('input');
    var hasErr102 = false;
    for (var i = 0; i < fields_table1_c1.lenght; i++) {
        var fieldVal = fields_table1_c1[i].val();
        if (fieldVal < 0 && !hasErr102) {
            hasErr102 = true;
            webform.errors.push({
                'fieldName': fields_table1_c1[i]['id'],
                'msg': Drupal.t('Cod eroare: 01-102, Cap COSTURI. Col.1 >= 0')
            })
        } else {
            break;
        }
    }

    /*01-036*/
    if (new Decimal(values.CAP2_R0300_C1 || 0).lessThan(Decimal(values.CAP2_R0310_C1 || 0).plus(values.CAP2_R0320_C1 || 0))) {
        webform.errors.push({
            'fieldName': 'CAP2_R0300_C1',
            'msg': Drupal.t('Cod eroare: 01-036, Cap COSTURI. rind.0300 >= rind.0310 + 0320 (Col.1) (' + Decimal(values.CAP2_R0300_C1 || 0) + ' ; ' + Decimal(values.CAP2_R0310_C1 || 0).plus(values.CAP2_R0320_C1 || 0) + ')', {})
        })
    }

    /*01-038*/
    if (new Decimal(values.CAP2_R1000_C1 || 0).lessThan(Decimal(values.CAP2_R1010_C1 || 0))) {
        webform.errors.push({
            'fieldName': 'CAP2_R1000_C1',
            'msg': Drupal.t('Cod eroare: 01-038, Cap COSTURI. rind.1000 >= rind.1010 (Col.1) (' + Decimal(values.CAP2_R1000_C1 || 0) + ' ;  ' + Decimal(values.CAP2_R1010_C1 || 0) + ')', {})
        })
    }

    /*01-034*/
    /*var CAP2_RA_C1 = values.CAP2_RA_C1;
    if (values.CAP2_RA_C1 == '') {
      CAP2_RA_C1 = 0;
    } else {
      CAP2_RA_C1 = parseFloat(values.CAP2_RA_C1);
    }
  
    var CAP2_RB_C1 = values.CAP2_RB_C1;
    if (values.CAP2_RB_C1 == '') {
      CAP2_RB_C1 = 0;
    } else {
      CAP2_RB_C1 = parseFloat(values.CAP2_RB_C1);
    }
  
    var CAP2_RC_C1 = values.CAP2_RC_C1;
    if (values.CAP2_RC_C1 == '') {
      CAP2_RC_C1 = 0;
    } else {
      CAP2_RC_C1 = parseFloat(values.CAP2_RC_C1);
    }
  
    var CAP2_RD_C1 = values.CAP2_RD_C1;
    if (values.CAP2_RD_C1 == '') {
      CAP2_RD_C1 = 0;
    } else {
      CAP2_RD_C1 = parseFloat(values.CAP2_RD_C1);
    }
  
    var CAP2_RE_C1 = values.CAP2_RE_C1;
    if (values.CAP2_RE_C1 == '') {
      CAP2_RE_C1 = 0;
    } else {
      CAP2_RE_C1 = parseFloat(values.CAP2_RE_C1);
    }
  
    var CAP2_RF_C1 = values.CAP2_RF_C1;
    if (values.CAP2_RF_C1 == '') {
      CAP2_RF_C1 = 0;
    } else {
      CAP2_RF_C1 = parseFloat(values.CAP2_RF_C1);
    }
  
    var CAP2_RG_C1 = values.CAP2_RG_C1;
    if (values.CAP2_RG_C1 == '') {
      CAP2_RG_C1 = 0;
    } else {
      CAP2_RG_C1 = parseFloat(values.CAP2_RG_C1);
    }
  
    var CAP2_RH_C1 = values.CAP2_RH_C1;
    if (values.CAP2_RH_C1 == '') {
      CAP2_RH_C1 = 0;
    } else {
      CAP2_RH_C1 = parseFloat(values.CAP2_RH_C1);
    }
  
    var CAP2_RI_C1 = values.CAP2_RI_C1;
    if (values.CAP2_RI_C1 == '') {
      CAP2_RI_C1 = 0;
    } else {
      CAP2_RI_C1 = parseFloat(values.CAP2_RI_C1);
    }
  
    var CAP2_RJ_C1 = values.CAP2_RJ_C1;
    if (values.CAP2_RJ_C1 == '') {
      CAP2_RJ_C1 = 0;
    } else {
      CAP2_RJ_C1 = parseFloat(values.CAP2_RJ_C1);
    }
  
    var CAP2_RK_C1 = values.CAP2_RK_C1;
    if (values.CAP2_RK_C1 == '') {
      CAP2_RK_C1 = 0;
    } else {
      CAP2_RK_C1 = parseFloat(values.CAP2_RK_C1);
    }
  
    var CAP2_RL_C1 = values.CAP2_RL_C1;
    if (values.CAP2_RL_C1 == '') {
      CAP2_RL_C1 = 0;
    } else {
      CAP2_RL_C1 = parseFloat(values.CAP2_RL_C1);
    }
  
    var CAP2_RM_C1 = values.CAP2_RM_C1;
    if (values.CAP2_RM_C1 == '') {
      CAP2_RM_C1 = 0;
    } else {
      CAP2_RM_C1 = parseFloat(values.CAP2_RM_C1);
    }
  
    var CAP2_RN_C1 = values.CAP2_RN_C1;
    if (values.CAP2_RN_C1 == '') {
      CAP2_RN_C1 = 0;
    } else {
      CAP2_RN_C1 = parseFloat(values.CAP2_RN_C1);
    }
  
    var CAP2_RO_C1 = values.CAP2_RO_C1;
    if (values.CAP2_RO_C1 == '') {
      CAP2_RO_C1 = 0;
    } else {
      CAP2_RO_C1 = parseFloat(values.CAP2_RO_C1);
    }
  
    var CAP2_RP_C1 = values.CAP2_RP_C1;
    if (values.CAP2_RP_C1 == '') {
      CAP2_RP_C1 = 0;
    } else {
      CAP2_RP_C1 = parseFloat(values.CAP2_RP_C1);
    }
  
    var CAP2_RQ_C1 = values.CAP2_RQ_C1;
    if (values.CAP2_RQ_C1 == '') {
      CAP2_RQ_C1 = 0;
    } else {
      CAP2_RQ_C1 = parseFloat(values.CAP2_RQ_C1);
    }
  
    var CAP2_RR_C1 = values.CAP2_RR_C1;
    if (values.CAP2_RR_C1 == '') {
      CAP2_RR_C1 = 0;
    } else {
      CAP2_RR_C1 = parseFloat(values.CAP2_RR_C1);
    }
  
    var CAP2_RS_C1 = values.CAP2_RS_C1;
    if (values.CAP2_RS_C1 == '') {
      CAP2_RS_C1 = 0;
    } else {
      CAP2_RS_C1 = parseFloat(values.CAP2_RS_C1);
    }
    
    var summ034 = new Decimal(values.CAP2_RA_C1 || 0)
      .plus(values.CAP2_RB_C1 || 0)
      .plus(values.CAP2_RC_C1 || 0)
      .plus(values.CAP2_RD_C1 || 0)
      .plus(values.CAP2_RE_C1 || 0)
      .plus(values.CAP2_RF_C1 || 0)
      .plus(values.CAP2_RG_C1 || 0)
      .plus(values.CAP2_RH_C1 || 0)
      .plus(values.CAP2_RI_C1 || 0)
      .plus(values.CAP2_RJ_C1 || 0)
      .plus(values.CAP2_RK_C1 || 0)
      .plus(values.CAP2_RL_C1 || 0)
      .plus(values.CAP2_RM_C1 || 0)
      .plus(values.CAP2_RN_C1 || 0)
      .plus(values.CAP2_RO_C1 || 0)
      .plus(values.CAP2_RP_C1 || 0)
      .plus(values.CAP2_RQ_C1 || 0)
      .plus(values.CAP2_RR_C1 || 0)
      .plus(values.CAP2_RS_C1 || 0);
    if (!new Decimal(values.CAP2_R0130_C1 || 0).equals(summ034)) {
      webform.errors.push({
        'fieldName': 'CAP2_R0130_C1',
        'msg': Drupal.t('Cod eroare: 01-034, Cap COSTURI. rind.0130 = rind.A + B + ... + S (Col.1) (' + Decimal(values.CAP2_R0130_C1 || 0) + ' ;  ' + summ034 + ')', {})
      });
    }*/

    /*01-115*/
    var CAP2_R0100_C1 = values.CAP2_R0100_C1;
    if (values.CAP2_R0100_C1 == '') {
        CAP2_R0100_C1 = 0;
    } else {
        CAP2_R0100_C1 = parseFloat(values.CAP2_R0100_C1);
    }

    var CAP2_R0101_C1 = values.CAP2_R0101_C1;
    if (values.CAP2_R0101_C1 == '') {
        CAP2_R0101_C1 = 0;
    } else {
        CAP2_R0101_C1 = parseFloat(values.CAP2_R0101_C1);
    }

    var CAP2_R0102_C1 = values.CAP2_R0102_C1;
    if (values.CAP2_R0102_C1 == '') {
        CAP2_R0102_C1 = 0;
    } else {
        CAP2_R0102_C1 = parseFloat(values.CAP2_R0102_C1);
    }

    var CAP2_R0103_C1 = values.CAP2_R0103_C1;
    if (values.CAP2_R0103_C1 == '') {
        CAP2_R0103_C1 = 0;
    } else {
        CAP2_R0103_C1 = parseFloat(values.CAP2_R0103_C1);
    }

    var sumOf101And102And103 = CAP2_R0101_C1 + CAP2_R0102_C1 + CAP2_R0103_C1;
    if (formatNumber(CAP2_R0100_C1, 1) != formatNumber(CAP2_R0101_C1 + CAP2_R0102_C1 + CAP2_R0103_C1, 1)) {
        webform.errors.push({
            'fieldName': 'CAP2_R0100_C1',
            'msg': Drupal.t('Cod eroare: 01-115. Cap COSTURI. rind.0100 = rind.0101+0102+0103 (Col.1) (' + CAP2_R0100_C1 + ' ;  ' + sumOf101And102And103 + ')', {})
        });
    }

    /*01-033*/
    var CAP2_R0130_C1 = values.CAP2_R0130_C1;
    if (values.CAP2_R0130_C1 == '') {
        CAP2_R0130_C1 = 0;
    } else {
        CAP2_R0130_C1 = parseFloat(values.CAP2_R0130_C1);
    }

    var CAP2_R0131_C1 = values.CAP2_R0131_C1;
    if (values.CAP2_R0131_C1 == '') {
        CAP2_R0131_C1 = 0;
    } else {
        CAP2_R0131_C1 = parseFloat(values.CAP2_R0131_C1);
    }

    var CAP2_R0132_C1 = values.CAP2_R0132_C1;
    if (values.CAP2_R0132_C1 == '') {
        CAP2_R0132_C1 = 0;
    } else {
        CAP2_R0132_C1 = parseFloat(values.CAP2_R0132_C1);
    }

    var sumOf131And132 = CAP2_R0131_C1 + CAP2_R0132_C1;
    if (formatNumber(CAP2_R0130_C1, 1) != formatNumber(CAP2_R0131_C1 + CAP2_R0132_C1, 1)) {
        webform.errors.push({
            'fieldName': 'CAP2_R0130_C1',
            'msg': Drupal.t('Cod eroare: 01-033. Cap COSTURI. rind.0130 = rind.0131+0132 (Col.1) (' + CAP2_R0130_C1 + ' ;  ' + sumOf131And132 + ')', {})
        });
    }

    var CAP2_R0300_C1 = values.CAP2_R0300_C1;
    if (values.CAP2_R0300_C1 == '') {
        CAP2_R0300_C1 = 0;
    } else {
        CAP2_R0300_C1 = parseFloat(values.CAP2_R0300_C1);
    }

    var CAP2_R0310_C1 = values.CAP2_R0310_C1;
    if (values.CAP2_R0310_C1 == '') {
        CAP2_R0310_C1 = 0;
    } else {
        CAP2_R0310_C1 = parseFloat(values.CAP2_R0310_C1);
    }

    var CAP2_R0320_C1 = values.CAP2_R0320_C1;
    if (values.CAP2_R0320_C1 == '') {
        CAP2_R0320_C1 = 0;
    } else {
        CAP2_R0320_C1 = parseFloat(values.CAP2_R0320_C1);
    }

    /*01-037*/
    var CAP2_R0500_C1 = values.CAP2_R0500_C1;
    if (values.CAP2_R0500_C1 == '') {
        CAP2_R0500_C1 = 0;
    } else {
        CAP2_R0500_C1 = parseFloat(values.CAP2_R0500_C1);
    }

    var CAP2_R0510_C1 = values.CAP2_R0510_C1;
    if (values.CAP2_R0510_C1 == '') {
        CAP2_R0510_C1 = 0;
    } else {
        CAP2_R0510_C1 = parseFloat(values.CAP2_R0510_C1);
    }

    var CAP2_R0520_C1 = values.CAP2_R0520_C1;
    if (values.CAP2_R0520_C1 == '') {
        CAP2_R0520_C1 = 0;
    } else {
        CAP2_R0520_C1 = parseFloat(values.CAP2_R0520_C1);
    }

    var CAP2_R0540_C1 = values.CAP2_R0540_C1;
    if (values.CAP2_R0540_C1 == '') {
        CAP2_R0540_C1 = 0;
    } else {
        CAP2_R0540_C1 = parseFloat(values.CAP2_R0540_C1);
    }

    var sumOf510And520And540 = (CAP2_R0510_C1 + CAP2_R0520_C1 + CAP2_R0540_C1);
    sumOf510And520And540 = (Math.round(sumOf510And520And540 * 100) / 100);
    if (values.CAP2_R0500_C1 !== 0 && sumOf510And520And540 !== 0) {
        if (CAP2_R0500_C1 < sumOf510And520And540) {
            webform.errors.push({
                'fieldName': 'CAP2_R0500_C1',
                'msg': Drupal.t('Cod eroare: 01-037. Cap COSTURI. rind.0500 >= rind.0510+0520+0540 (Col.1) ( @500c1 ; @sum510And520And540)', {
                    '@500c1': CAP2_R0500_C1,
                    '@sum510And520And540': sumOf510And520And540
                })
            });
        }
    }

    /*01-028*/
    var CAP1_R2000_C1 = values.CAP1_R2000_C1;
    if (values.CAP1_R2000_C1 == '') {
        CAP1_R2000_C1 = 0;
    } else {
        CAP1_R2000_C1 = parseFloat(values.CAP1_R2000_C1);
    }

    var CAP1_R2300_C1 = values.CAP1_R2300_C1;
    if (values.CAP1_R2300_C1 == '') {
        CAP1_R2300_C1 = 0;
    } else {
        CAP1_R2300_C1 = parseFloat(values.CAP1_R2300_C1);
    }

    var CAP1_R2400_C1 = values.CAP1_R2400_C1;
    if (values.CAP1_R2400_C1 == '') {
        CAP1_R2400_C1 = 0;
    } else {
        CAP1_R2400_C1 = parseFloat(values.CAP1_R2400_C1);
    }

    var CAP1_R2500_C1 = values.CAP1_R2500_C1;
    if (values.CAP1_R2500_C1 == '') {
        CAP1_R2500_C1 = 0;
    } else {
        CAP1_R2500_C1 = parseFloat(values.CAP1_R2500_C1);
    }
    
    var sumOf2300And2400And2500 = (CAP1_R2300_C1 + CAP1_R2400_C1 + CAP1_R2500_C1);

    // Round to one digit after the decimal point
    // In Drupal js code 
    //Convert this in variable in number   after Round
    // CAP1_R2000_C1 = CAP1_R2000_C1.toFixed(1);
    // sumOf2300And2400And2500 = sumOf2300And2400And2500.toFixed(1);

    // Convert and round CAP1_R2000_C1 to a number
    var CAP1_R2000_C1 = parseFloat(CAP1_R2000_C1.toFixed(1));

    // Convert and round sumOf2300And2400And2500 to a number
    var sumOf2300And2400And2500 = parseFloat(sumOf2300And2400And2500.toFixed(1));


//Round to one digit after the decimal point
//Round to one digit after the decimal point this two variable
    if (CAP1_R2000_C1 < sumOf2300And2400And2500) {
        webform.errors.push({
            'fieldName': 'CAP1_R2000_C1',
            'msg': Drupal.t('Cod eroare: 01-028. Cap STOC. rind.2000 >= rind.2300+2400+2500 (Col.1) ( @2000c1 ; @sumOf2300And2400And2500)', {
                '@2000c1': CAP1_R2000_C1,
                '@sumOf2300And2400And2500': sumOf2300And2400And2500
            })
        });
    }

    /*01-028*/
    var CAP1_R2000_C2 = values.CAP1_R2000_C2;
    if (values.CAP1_R2000_C2 == '') {
        CAP1_R2000_C2 = 0;
    } else {
        CAP1_R2000_C2 = parseFloat(values.CAP1_R2000_C2);
    }

    var CAP1_R2300_C2 = values.CAP1_R2300_C2;
    if (values.CAP1_R2300_C2 == '') {
        CAP1_R2300_C2 = 0;
    } else {
        CAP1_R2300_C2 = parseFloat(values.CAP1_R2300_C2);
    }

    var CAP1_R2400_C2 = values.CAP1_R2400_C2;
    if (values.CAP1_R2400_C2 == '') {
        CAP1_R2400_C2 = 0;
    } else {
        CAP1_R2400_C2 = parseFloat(values.CAP1_R2400_C2);
    }

    var CAP1_R2500_C2 = values.CAP1_R2500_C2;
    if (values.CAP1_R2500_C2 == '') {
        CAP1_R2500_C2 = 0;
    } else {
        CAP1_R2500_C2 = parseFloat(values.CAP1_R2500_C2);
    }
    var sumOf2300And2400And2500c2 = (CAP1_R2300_C2 + CAP1_R2400_C2 + CAP1_R2500_C2);
// Nr.5 - C Am corectat.
// Versiunea fiserului 5-CI-23-011.js
    CAP1_R2000_C2 = CAP1_R2000_C2.toFixed(1);
    sumOf2300And2400And2500c2 = sumOf2300And2400And2500c2.toFixed(1);

    if (CAP1_R2000_C2 < sumOf2300And2400And2500c2) {
        webform.errors.push({
            'fieldName': 'CAP1_R2000_C2',
            'msg': Drupal.t('Cod eroare: 01-028. Cap STOC. rind.2000 >= rind.2300+2400+2500 (Col.2) ( @2000c2 ; @sumOf2300And2400And2500c2)', {
                '@2000c2': CAP1_R2000_C2,
                '@sumOf2300And2400And2500c2': sumOf2300And2400And2500c2
            })
        });
    }

    /*01-113*/
    var CAP2_R0100_C1 = values.CAP2_R0100_C1;
    if (values.CAP2_R0100_C1 == '') {
        CAP2_R0100_C1 = 0;
    } else {
        CAP2_R0100_C1 = parseFloat(values.CAP2_R0100_C1);
    }

    var CAP2_R0200_C1 = values.CAP2_R0200_C1;
    if (values.CAP2_R0200_C1 == '') {
        CAP2_R0200_C1 = 0;
    } else {
        CAP2_R0200_C1 = parseFloat(values.CAP2_R0200_C1);
    }

    if ((CAP2_R0100_C1 != 0) && (CAP2_R0200_C1 == 0)) {
        webform.warnings.push({
            'fieldName': 'CAP2_R0200_C1',
            'msg': Drupal.t('Cod eroare: 01-113. Cap COSTURI. daca rind.0100 <> 0, atunci rind.0200 <> 0 (' + CAP2_R0100_C1 + ' ;  ' + CAP2_R0200_C1 + ')', {})
        });
    }

    /*01-039*/
    var CAP2_R0120_C1 = values.CAP2_R0120_C1;
    if (values.CAP2_R0120_C1 == '') {
        CAP2_R0120_C1 = 0;
    } else {
        CAP2_R0120_C1 = parseFloat(values.CAP2_R0120_C1);
    }

    var CAP2_R0190_C1 = values.CAP2_R0190_C1;
    if (values.CAP2_R0190_C1 == '') {
        CAP2_R0190_C1 = 0;
    } else {
        CAP2_R0190_C1 = parseFloat(values.CAP2_R0190_C1);
    }

    if ((CAP2_R0120_C1 != 0) && (CAP2_R0190_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP2_R0190_C1',
            'msg': Drupal.t('Cod eroare: 01-039. Cap COSTURI. daca rind.0120 <> 0, atunci rind.0190 <> 0 (Col.1) (' + CAP2_R0120_C1 + ' ;  ' + CAP2_R0190_C1 + ')', {})
        });
    }

    /*01-110*/
    var CAP2_R1200_C1 = values.CAP2_R1200_C1;
    if (values.CAP2_R1200_C1 == '') {
        CAP2_R1200_C1 = 0;
    } else {
        CAP2_R1200_C1 = parseFloat(values.CAP2_R1200_C1);
    }

    if (values.CAP2_R0200_C1 == '') {
        CAP2_R0200_C1 = 0;
    } else {
        CAP2_R0200_C1 = parseFloat(values.CAP2_R0200_C1);
    }

    if ((CAP2_R0200_C1 != 0) && (CAP2_R1200_C1 == 0) && (!values.CAP2_R1200_C1)) {
        webform.warnings.push({
            'fieldName': 'CAP2_R1200_C1',
            'msg': Drupal.t('Cod eroare: 01-110, CAP. INFORMATIV Rind 1200 trebue sa fie completat.', {})
        });
    }

    /* 01-040 */
    /*if ((CAP2_R0190_C1 != 0) && ((CAP2_R0120_C1 == 0) && (CAP2_RI_C1 == 0))) {
      webform.errors.push({
        'fieldName': 'CAP2_R0120_C1',
        'msg': Drupal.t('Cod eroare: 01-040. Cap COSTURI. daca rind.0190 <> 0, atunci rind.0120 <> 0 sau rind.I <> 0 (Col.1) (' + CAP2_R0190_C1 + ' ;  ' + CAP2_R0120_C1 + ' ;  ' + CAP2_RI_C1 + ')', {})
      });
    }*/
    if ((CAP2_R0190_C1 != 0) && ((CAP2_R0120_C1 == 0))) {
        webform.errors.push({
            'fieldName': 'CAP2_R0120_C1',
            'msg': Drupal.t('Cod eroare: 01-040. Cap COSTURI. daca rind.0190 <> 0, atunci rind.0120 <> 0 (Col.1) (' + CAP2_R0190_C1 + ' ;  ' + CAP2_R0120_C1 + ')', {})
        });
    }

    /*01-042*/
    /*var CAEM = values.CAEM;
    var CAP3_R1500_C1 = values.CAP3_R1500_C1;
    if ((parseFloat(CAP3_R1500_C1) > 0) && (CAEM.substring(0, 3) != 'A01')) {
      webform.errors.push({
        'fieldName': 'CAP3_R1500_C1',
        'msg': Drupal.t('Cod eroare: 01-042. Cap AGR. se completeaza doar de intreprinderi cu CAEM = A01', {})
      });
    }*/

    /*01-044*/
    /*var CAP2_R0200_C1 = values.CAP2_R0200_C1;
    if (values.CAP2_R0200_C1 == '') {
      CAP2_R0200_C1 = 0;
    } else {
      CAP2_R0200_C1 = parseFloat(values.CAP2_R0200_C1);
    }
  
    var CAP3_R1500_C1 = values.CAP3_R1500_C1;
    if (values.CAP3_R1500_C1 == '') {
      CAP3_R1500_C1 = 0;
    } else {
      CAP3_R1500_C1 = parseFloat(values.CAP3_R1500_C1);
    }
  
    if (CAP3_R1500_C1 > CAP2_R0200_C1) {
      webform.errors.push({
        'fieldName': 'CAP3_R1500_C1',
        'msg': Drupal.t('Cod eroare: 01-044. Cap AGR. rind.1500 <= Cap COSTURI. rind.0200 (Col.1) (' + CAP3_R1500_C1 + ' ;  ' + CAP2_R0200_C1 + ')', {})
      });
    }*/

    /*01-049*/
    /*if (((CAEM.substring(0, 3) == 'A01') && (CAP2_R0200_C1 > 0)) && (CAP3_R1500_C1 <= 0)) {
      webform.warnings.push({
        'fieldName': 'CAP3_R1500_C1',
        'msg': Drupal.t('Cod eroare: 01-049. Daca Cod. CAEM = A01 si rind.0200 Col.(1)>0, atunci rind 1500 Col.(1)>0', {})
      });
    }*/

    /*01-101*/
    var CAP2_R0170_C1 = values.CAP2_R0170_C1;
    if (values.CAP2_R0170_C1 == '') {
        CAP2_R0170_C1 = 0;
    } else {
        CAP2_R0170_C1 = parseFloat(values.CAP2_R0170_C1);
    }

    var CAP2_R0100_C1 = values.CAP2_R0100_C1;
    if (values.CAP2_R0100_C1 == '') {
        CAP2_R0100_C1 = 0;
    } else {
        CAP2_R0100_C1 = parseFloat(values.CAP2_R0100_C1);
    }

    if (CAP2_R0170_C1 > CAP2_R0100_C1) {
        webform.errors.push({
            'fieldName': 'CAP2_R0170_C1',
            'msg': Drupal.t('Cod eroare: 01-101. Cap COSTURI. rind.0170 <= rind.0100 (Col.1) (' + CAP2_R0170_C1 + ' ;  ' + CAP2_R0100_C1 + ')', {})
        });
    }

    /*01-103*/
    /*var CAP2_R0111_C1 = values.CAP2_R0111_C1;
    if (values.CAP2_R0111_C1 == '') {
      CAP2_R0111_C1 = 0;
    } else {
      CAP2_R0111_C1 = parseFloat(values.CAP2_R0111_C1);
    }
  
    var CAP2_R0110_C1 = values.CAP2_R0110_C1;
    if (values.CAP2_R0110_C1 == '') {
      CAP2_R0110_C1 = 0;
    } else {
      CAP2_R0110_C1 = parseFloat(values.CAP2_R0110_C1);
    }
  
    if (CAP2_R0111_C1 > CAP2_R0110_C1) {
      webform.errors.push({
        'fieldName': 'CAP2_R0111_C1',
        'msg': Drupal.t('Cod eroare: 01-103. Cap COSTURI. rd.0111 <= rd.0110 (Col.1) (' + CAP2_R0111_C1 + ' ;  ' + CAP2_R0110_C1 + ')', {})
      });
    }*/

    /*01-104*/
    var CAP2_R0141_C1 = values.CAP2_R0141_C1;
    if (values.CAP2_R0141_C1 == '') {
        CAP2_R0141_C1 = 0;
    } else {
        CAP2_R0141_C1 = parseFloat(values.CAP2_R0141_C1);
    }

    var CAP2_R0140_C1 = values.CAP2_R0140_C1;
    if (values.CAP2_R0140_C1 == '') {
        CAP2_R0140_C1 = 0;
    } else {
        CAP2_R0140_C1 = parseFloat(values.CAP2_R0140_C1);
    }

    if (CAP2_R0141_C1 > CAP2_R0140_C1) {
        webform.errors.push({
            'fieldName': 'CAP2_R0141_C1',
            'msg': Drupal.t('Cod eroare: 01-104. Cap COSTURI. rd.0141 <= rd.0140 (Col.1) (' + CAP2_R0141_C1 + ' ;  ' + CAP2_R0140_C1 + ')', {})
        });
    }

    var trimestrial = Drupal.settings.mywebform.values.TRIM;
    var year = Drupal.settings.mywebform.values.YEAR;
    if (parseFloat(trimestrial) == get_trimestrial() && year == get_current_year()) {
        webform.errors.push({
            'fieldName': 'TRIM',
            'msg': Drupal.t('Eroare la selectarea perioadei!')
        });
    }

    var completed_tables = identifyCompletedTables();

    if (!completed_tables['CAP1_']) {
        webform.errors.push({
            'fieldName': '',
            'msg': Drupal.t('The table "@table" must be completed.', {
                '@table': Drupal.t('Cap.: STOC: Stocuri')
            })
        });
    }

    if (!completed_tables['CAP2_']) {
        webform.errors.push({
            'fieldName': '',
            'msg': Drupal.t('The table "@table" must be completed.', {
                '@table': Drupal.t('Cap. COSTURI - Venituri, costuri și cheltuieli în total pe entitate')
            })
        });
    }

    if (!values.STREET) {
        webform.warnings.push({
            "fieldName": "STREET",
            "msg": Drupal.t('Câmpul nu este completat')
        });
    }

    webform.validatorsStatus['ci5'] = 1;
    validateWebform();
}

function identifyCompletedTables() {
    tables = {};

    var values = Drupal.settings.mywebform.values;
    for (var fieldName in values) {
        var exp = /^CAP(\d)_/;
        var result = fieldName.match(exp);
        if (result) {
            if (!tables.hasOwnProperty(result[1])) {
                if (values[fieldName] instanceof Array) {
                    if (values[fieldName].length > 1) {
                        tables[result[0]] = true;
                    } else if (values[fieldName].length == 1) {
                        var gridName = Drupal.settings.mywebform.fields[fieldName].grid_name;
                        var indexField = Drupal.settings.mywebform.grids[gridName].defField;

                        if (fieldName != indexField) {
                            if (values[fieldName][0] !== '' && values[fieldName][0] !== null) {
                                tables[result[0]] = true;
                            }
                        }
                    }
                } else {
                    if (values[fieldName] !== '' && values[fieldName] !== null) {
                        tables[result[0]] = true;
                    }
                }
            }
        }
    }
    return tables;
}

function get_trimestrial() {
    var date = new Date();
    return Math.ceil((date.getMonth() + 1) / 3);
}

function get_current_year() {
    var date = new Date();
    return date.getFullYear();
}