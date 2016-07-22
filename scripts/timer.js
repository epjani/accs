var CountDown = (function ($) {
    CountdownStarted = false;
    var TimeOut = 10000;
    var TimeGap = 1000;

    var CurrentTime = ( new Date() ).getTime();
    var EndTime = ( new Date() ).getTime() + TimeOut;


    var Running = true;

    var UpdateTimer = function() {
        if( CurrentTime + TimeGap < EndTime ) { setTimeout( UpdateTimer, TimeGap ); }
        if( Running ) { CurrentTime += TimeGap; }

        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();

        if ( Running ) {
            if (time_to_beep(Minutes, Seconds)) {
                beep_sound();
            }
            if (should_end_exam(Minutes, Seconds)) {
                end_case_study();
            }
        }
        var minutes_left = (Minutes < 10 ? '0' : '') + Minutes;
        var seconds_left = (Seconds < 10 ? '0' : '') + Seconds;
        display_time(minutes_left, seconds_left);
    };

    var Pause = function() {
        Running = false;
    };

    var Resume = function(timeout) {
        if (timeout != null) {
            display_time('', '');
            Timeout = timeout;
            CurrentTime = ( new Date() ).getTime();
            EndTime = ( new Date() ).getTime() + TimeOut;
        }
        Running = true;
    };

    var Start = function( Timeout ) {
        Running = true;
        CountdownStarted = true;
        TimeOut = Timeout;
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);

function time_to_beep(minutes, seconds) {
    return (minutes == 10 && seconds == 0) || (minutes == 5 && seconds == 0) ||
    (minutes == 1 && seconds == 0) || (minutes == 0 && seconds == 30) ||
    (minutes == 0 && seconds <= 10)
}

function should_end_exam(minutes, seconds) {
    return (minutes == 0 && seconds == 0)
}

function beep_sound() {
    play_sound(sounds.beep);
}